import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Login from "../../pages/Login";
const Router = () =>{
    return(
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/nosotros" element={<About/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}
export default Router;