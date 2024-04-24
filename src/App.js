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

function App() {
  return (
    <BrowserRouter>
      {/* header */}  
      <HeaderDos/>
      <Router/>
      <Home/>
      <Shop/>
      <ProductView/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
