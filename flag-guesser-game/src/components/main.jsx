import React, { useState, useEffect } from "react";

// variables from useState
const [flag, setFlag] = useState(""); //behåller flaggans url
const [options, setOptions] = useState([]); //sparar olika länderna
const [correctCountry, setCorrectCountry] = useState(""); //Sparar rätt svar 
const [selectedOption, setSelectOption] = useState(null); //det svaret som användaren trycker


const FlagGuessGame = () => {
  return (
    <div>
      <h1>Guess the Flag!</h1>
    </div>
  );
};

export default FlagGuessGame;
