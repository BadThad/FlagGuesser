import React, { useState, useEffect } from "react";


const FlagGuessGame = () => {
// variables from useState
const [flag, setFlag] = useState(""); //behåller flaggans url
const [options, setOptions] = useState([]); //sparar olika länderna
let [correctCountry, setCorrectCountry] = useState(""); //Sparar rätt svar 
const [selectedOption, setSelectOption] = useState(null); //det svaret som användaren trycker

// API Rest countries API
useEffect(() => { //lagt i för att useEffect ska bestämma när det fetches
    const apiUrl = "https://restcountries.com/v3.1/all"; //Api som fetchar all data (inga parameter) (ska vara i function annars problem ?)
const fetchFlag = async () => {
try {
    const response = await fetch(apiUrl); //request att hämta all data 
    const countries = await response.json(); //ändrar till JSon och är en function
    const randomIndex = Math.floor(Math.random() * countries.length);//length så att det är inom array
    const country = countries[randomIndex];

    setCorrectCountry(country); //att välja random land
    setFlag(country.flags[0]);

    const randomCountries = getRandomCountries(country, countries);
    setOptions(randomCountries.map((country) => country.name.common)); //randomCountries är Array, map skapar ny array. country.name.common för att nå landet och inte hela objectet

 } catch (error) { //error meddelande om de inte gick att hämta api
 } console.error("Error fetching data", error.message);
}


    fetchFlag(); // calls function fetchFlag() gör att den endast hämtas när den ska
  }, []);


//   get random countries som kopplas till const randomCountries = getRandomCountries 
// hämta tre länder som inte är rätt
const getRandomCountries = ()


  return (
    <div>
      <h1>Guess the Flag!</h1>
    </div>
  );
};

export default FlagGuessGame;
