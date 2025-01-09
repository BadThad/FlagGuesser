import React, { useState, useEffect } from "react";
import './game.css';



const FlagGuessGame = () => {
// variables from useState
const [flag, setFlag] = useState(""); //behåller flaggans url
const [options, setOptions] = useState([]); //sparar olika länderna
const [correctCountry, setCorrectCountry] = useState(""); //Sparar rätt svar 
const [selectedOption, setSelectOption] = useState(null); //det svaret som användaren trycker
const [result, setResult] = useState("");//Meddelande vid rätt eller fel svar
const [counter, setCounter] = useState(1); // A counter to keep track of number of guesses (up to 10 when round ends).
const [nextFlag, setNextFlag] = useState(false); // Variables used together with dependancy array of useEffect to control when useEffect runs.
const [scoreCount, setScoreCount] = useState(0); // This is the scorekeeper which is added to the function which tracks if the choice was correct.
const [disabled, setDisabled] = useState(false);
const [gameOver, setGameOver] = useState(false);

// API Rest countries API
useEffect(() => { //lagt i för att useEffect ska bestämma när det fetches
    const apiUrl = "https://restcountries.com/v3.1/all"; //Api som fetchar all data (inga parameter) (ska vara i function annars problem ?)

    const fetchFlag = async () => {
    try {
    const response = await fetch(apiUrl); //request att hämta all data 
    const countries = await response.json(); //ändrar till JSon och är en function
    const randomIndex = Math.floor(Math.random() * countries.length);//length så att det är inom array
    const country = countries[randomIndex];

    setCorrectCountry(country.name.common); //att välja random land
    setFlag(`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`);//annan API för flaggan - visar random bild, cca2 är cuntry code

    const randomCountries = getRandomCountries(country, countries);
    setOptions(randomCountries.map((country) => country.name.common)); //randomCountries är Array, map skapar ny array. country.name.common för att nå landet och inte hela objectet

 } catch (error) { //error meddelande om de inte gick att hämta api
    console.error("Error fetching data", error.message);
    setResult("Error fetching data");
 }
}

    fetchFlag(); // calls function fetchFlag() gör att den endast hämtas när den ska
  }, [nextFlag]); // Added a dependancy to control when useEffect runs.


// get random countries som kopplas till const randomCountries = getRandomCountries 
// hämta tre länder som inte är rätt
const getRandomCountries = (correctCountry, countries) => {
    const randomCountries = [correctCountry];//visar korrekt country så att det inte väljs den
    while (randomCountries.length < 4) { //while loop som körs så långe tills det är färre än 4 element, då vi behöver 4, inkl det rätta landet
        const randomCountry = countries[Math.floor(Math.random() * countries.length)]; //samma sak som ovan med correct country
        if (!randomCountries.includes(randomCountry)) { //random country får inte vara correcta country
          randomCountries.push(randomCountry); // push: läggs i slutet av listan om landet inte finns i listan
        }
      }
      return randomCountries.sort(() => Math.random() - 0.5); //sort randomly -0.5 gör att det blandas även i array (att det inte är samma)
};

//Om option (som väljs är rätt eller fel olika svar)
const optionClick = (option) =>{
    setSelectOption (option);
    setDisabled(true);
    if (option === correctCountry) {
        setResult('Correct');
        setScoreCount(scoreCount + 1)   // This will keep track of the score.
    } else {
        setResult(`Wrong. The correct answer was ${correctCountry}`);
    }
};

console.log(scoreCount);

// Function which triggers the useEffect to run.
const newFlag = () => {
    setNextFlag(!nextFlag);
}

// Counter to keep track of how many rounds have been played and to fetch new flag.
const roundCounter = () => {
  if (counter < 10) {
    setCounter(counter + 1);
} else {
  setGameOver(true);  // if round 10 then function setGameover calls

}
}

 const quitGame = () => {
  alert('you guit the game'); //shows alert when quit game -> get to login again ?
 }
 
// for button restart 
 const restartGame = () => {
  setCounter(1); //back to round 1
  setScoreCount(0); //score to 0
  setGameOver(false); // game is not over anymore 
  setDisabled(false); // alla knappar blir aktiva
  setNextFlag(false); //new flag wont show until user chooses next round
  setResult(""); //result empty string
  setSelectOption(null); //nothing is selected
};

// Function which resets the selection of the user and the displayed result of correct or wrong.
const handleNext = () => {
    setSelectOption(null);
    setResult("");
    };
  
// "Next" button to proceed to next round and resets selection. Includes onClick event which increases round count and fetches new flag.
const nextRound = () => {
    return (
        <button 
        className="next-round-btn"
        onClick={() => {roundCounter(); newFlag(); handleNext(); setDisabled(false);}}> 
            Next Round
            
        </button>
    )
}

//button option:
//arrow function för att kunna trycka på options.
const renderOptions = () =>
    options.map((option, index) => (
      <button className="guess-btn" //allt inom button
        key={index}
        onClick={() => optionClick(option)}
        style={{
          backgroundColor: 
            result && option === correctCountry
              ? "lightgreen" // Grön för rätt svar
              : result && selectedOption === option //kontrollerar om rätt svar och om det stämmer ihopm med valda knappen
              ? "red" // Röd för fel svar
              : "#1393EC", //innebär om inget har tryckt så är det beige
        }}
        disabled={selectedOption === option || disabled}//disable the button when option is set
      >
        {option}
      </button>
    ));

  return (
    <div className="game-container">
      <h1>Guess which country this flag belongs to.</h1>
      {!gameOver ? ( //condition ? valueIfTrue : valueIfFalse
        <>
      <div className="roundcounter-container">Round {counter} of 10.</div>
      <div className="flag-container">{flag && <img src={flag} alt="Country Flag"/>}</div>
      {/* call function renderOptions */}
      <div className="guess-btn-container">{renderOptions()}</div> 
      <div className="nextround-btn-container">{nextRound()}</div>
      {/* visar result and score count*/}
      {result && <p className="score-display">{`${result}. Your current score is: ${scoreCount}`}</p>}

      </>
      ) : (
        <div className="gameover-msg-container">
          <h2 className="gameover-msg">Game Over</h2>
          <p className="final-score">Your final score is: {scoreCount}</p> 
          <div className="gameover-btn-container">
            <button className="retry-btn" onClick={restartGame}>Retry</button>
            <button className="quit-btn" onClick={quitGame}>Quit</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default FlagGuessGame;
