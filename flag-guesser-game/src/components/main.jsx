import React, { useState, useEffect } from "react";


const FlagGuessGame = () => {
// variables from useState
const [flag, setFlag] = useState(""); //behåller flaggans url
const [options, setOptions] = useState([]); //sparar olika länderna
const [correctCountry, setCorrectCountry] = useState(""); //Sparar rätt svar 
const [selectedOption, setSelectOption] = useState(null); //det svaret som användaren trycker
const [result, setResult] = useState("");//Meddelande vid rätt eller fel svar


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
 } console.error("Error fetching data", error.message);
    setResult("Error fetching data");
}


    fetchFlag(); // calls function fetchFlag() gör att den endast hämtas när den ska
  }, []);


//   get random countries som kopplas till const randomCountries = getRandomCountries 
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
    if (option === correctCountry) {
        setResult('Correct');
    } else {
        setResult(`Wrong. The correct answer was ${correctCountry}`);
    }
};


//button option:
//arrow function för att kunna trycka på options.
const renderOptions = () =>
    options.map((option, index) => (
      <button //allt inom button
        key={index}
        onClick={() => optionClick(option)}
        style={{
          fontSize: "16px",
          backgroundColor: 
            result && option === correctCountry
              ? "lightgreen" // Grön för rätt svar
              : result && selectedOption === option //kontrollerar om rätt svar och om det stämmer ihopm med valda knappen
              ? "red" // Röd för fel svar
              : "beige", //innebär om inget har tryckt så är det beige
        }}
      >
        {option}
      </button>
    ));

  return (
    <div>
      <h1>Guess the Flag!</h1>
      {flag && <img src={flag} alt="Country Flag" style={{ margin:"10px 30px", width: "200px", height: "auto" }} />}
      <div>{renderOptions()}</div> 
      {/* call function renderOptions */}
      {result && <p>{result}</p>}
      {/* visar result */}
    </div>
  );
};


export default FlagGuessGame;
