import logo from './logo.svg';
import './App.css';
import HeaderDos from './components/partials/HeaderDos';
import Footer from './components/partials/Footer';
import Shop from './pages/Shop';
import PagoCheckOut from './pages/PagoCheckout';
import Carrito from './pages/Carrito';
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
