import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Registrate from "../../pages/Registrate";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import ProductView from "../../pages/ProductView";
import Favorites from "../../pages/Favorites";
import Carrito from "../../pages/Carrito";
import CarritoCheckout from "../../pages/CarritoCheckout";
import DatosDeEnvio from "../../pages/DatosDeEnvio";
import PagoCheckout from "../../pages/PagoCheckout";
import PagoCheckOut2 from "../../pages/PagoCheckOut2";
import ConfirmacionCompra from "../../pages/ConfirmacionCompra";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Terms from "../../pages/Terms";
import Politics from "../../pages/Politics";
import Questions from "../../pages/Questions";
const Router = () => {
    return (
        <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/registrate" element={<Registrate/>} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/iteki" element={<Home />} />
                <Route path="/tienda" element={<Shop />} />
                <Route path="/producto" element={<ProductView />} />
                <Route path="/favoritos" element={<Favorites />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/carritoCheckout" element={<CarritoCheckout />} />
                <Route path="/datosDeEnvio" element={<DatosDeEnvio />} />
                <Route path="/pagoCheckout" element={<PagoCheckout />} />
                <Route path="/pagoCheckOut2" element={<PagoCheckOut2 />} />
                <Route path="/confirmacionCompra" element={<ConfirmacionCompra />} />
                <Route path="/contactos" element={<Contact />} />
                <Route path="/terminos" element={<Terms />} />
                <Route path="/politicas" element={<Politics />} />
                <Route path="/preguntas" element={<Questions />} />
        </Routes>
    )
}
export default Router;