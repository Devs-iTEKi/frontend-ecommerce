import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import ProductView from "../../pages/ProductView";
import Favorites from "../../pages/Favorites";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Terms from "../../pages/Terms";
import Politics from "../../pages/Politics";
import Questions from "../../pages/Questions";
const Router = () => {
    return (
        <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/iteki" element={<Home />} />
                <Route path="/tienda" element={<Shop />} />
                <Route path="/producto" element={<ProductView />} />
                <Route path="/favoritos" element={<Favorites />} />
                <Route path="/contactos" element={<Contact />} />
                <Route path="/terminos" element={<Terms />} />
                <Route path="/politicas" element={<Politics />} />
                <Route path="/preguntas" element={<Questions />} />
        </Routes>
    )
}
export default Router;