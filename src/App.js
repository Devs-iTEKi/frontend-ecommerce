import logo from './logo.svg';
import './App.css';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Shop from './pages/Shop';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/router';
import { Horse, Heart, Cube, Alien  } from "@phosphor-icons/react";

function App() {
  return (
    <BrowserRouter>
      {/* header */}  
      <Header/>
      <Router/>

      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
      <Alien />

      {/* Footer */} 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
