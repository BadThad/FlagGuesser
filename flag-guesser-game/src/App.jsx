import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer.jsx';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Login from './components/login.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Login></Login>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
