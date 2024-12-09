import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import FlagGuessGame from './components/main.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      <FlagGuessGame></FlagGuessGame>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
