import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Main from './components/main.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
