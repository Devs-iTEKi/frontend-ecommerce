import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Shop from "../../pages/Shop";
import ProductView from "../../pages/ProductView";
const Router = () =>{
    return(
        <Routes>

            <Route path="/home" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/shop" element={<ProductView/>} />

        </Routes>
    )
}
export default Router;