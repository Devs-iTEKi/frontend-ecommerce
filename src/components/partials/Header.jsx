import { HeartStraight, ShoppingCartSimple } from "@phosphor-icons/react";

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/img/logo/2.png" alt="logo" width="32" height="32" className="mx-2" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mx-4 py-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="#">Tienda</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Inicia sesión</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Regístrate</a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><HeartStraight size={32} /></a></li>
                        <li className="nav-item"><a className="nav-link" href="#"><ShoppingCartSimple size={32} /></a></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
export default Header;