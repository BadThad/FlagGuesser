import './App.css';
import React from "react";
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import FlagGuessGame from './components/main.jsx';


function App() {

  return (
    <>
      <Header></Header>
      <FlagGuessGame></FlagGuessGame>
      <Footer></Footer>
    </>
  )
}

export default App;
