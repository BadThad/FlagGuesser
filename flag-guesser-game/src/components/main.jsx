import React, { useState, useEffect } from "react";


const FlagGuessGame = () => {
// variables from useState
const [flag, setFlag] = useState(""); //behåller flaggans url
const [options, setOptions] = useState([]); //sparar olika länderna
const [correctCountry, setCorrectCountry] = useState(""); //Sparar rätt svar 
const [selectedOption, setSelectOption] = useState(null); //det svaret som användaren trycker

// API Rest countries API
useEffect(() => { //lagt i för att useEffect ska bestämma när det fetches
const fetchFlag = async () => {
try {
    const apiUrl = "https://restcountries.com/v3.1/all"; //Api som fetchar all data (inga parameter) (ska vara i function annars problem)
    const response = await fetch(apiUrl); //request att hämta all data 
    const countries = await response.json(); //ändrar till JSon och är en function
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
