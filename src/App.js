import logo from './logo.svg';
import './App.css';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Shop from './pages/Shop';
import PagoCheckOut from './pages/PagoCheckout';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/router';
import { Horse, Heart, Cube, Alien  } from "@phosphor-icons/react";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      {/* <PagoCheckOut/> */}
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
