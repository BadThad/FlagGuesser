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
    const randomIndex = Math.floor(Math.random() * countries.length);
    let correctCountry = countries[randomIndex]; //att välja random land
    //length så att det är inom array
 } catch (error) { //error meddelande om de inte gick att hämta api
 } displayError(error.message);
}


    fetchFlag(); // calls function fetchFlag() gör att den endast hämtas när den ska
  }, []);

  return (
    <div>
      <h1>Guess the Flag!</h1>
    </div>
  );
};

export default FlagGuessGame;
