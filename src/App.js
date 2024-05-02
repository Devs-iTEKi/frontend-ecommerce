import logo from './logo.svg';
import './App.css';
import HeaderDos from './components/partials/HeaderDos';
import Footer from './components/partials/Footer';
import Shop from './pages/Shop';
import Carrito from './pages/Carrito';
import PagoCheckOut from './pages/PagoCheckout';
import DatosDeEnvio from './pages/DatosDeEnvio';
import pagoCheckout from './pages/PagoCheckout';
import pagoCheckOut2 from './pages/PagoCheckOut2';
import confirmacionCompra from './pages/ConfirmacionCompra';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/router';
import Home from './pages/Home';
import ProductView from './pages/ProductView';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Politics from './pages/Politics';
import Questions from './pages/Questions';
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <HeaderDos/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
