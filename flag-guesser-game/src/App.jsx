import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {

  return (
    <>
     <BrowserRouter>
    <Header></Header>
    </BrowserRouter>
    </>
  )
}

export default App;
