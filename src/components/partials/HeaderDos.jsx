import { UserCircle, HeartStraight, ShoppingCartSimple } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const HeaderDos = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg text-white" data-bs-theme="dark" >

                <div className="container-fluid">
                    <Link to="/iteki" className="navbar-brand" href="#">
                        <img src="/img/logo/2.png" alt="logo" width="32" height="32" className="mx-2" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end mx-4 py-2" id="navbarNav">
                        <ul className="navbar-nav list-unstyled">
                            <li className="nav-item px-2"><Link to="/tienda" className="link nav-link">Tienda</Link></li>
                            <li className="nav-item px-2"><Link to="/registrate" className="link nav-link">Registrate</Link></li>
                            <li className="nav-item px-2"><Link to="/" className="link nav-link">Inicia sesión</Link></li>
                            <li className="nav-item px-2"><Link to="/favoritos" className="link nav-link"><HeartStraight size={28}/></Link></li>
                            <li className="nav-item px-2"><Link to="/" className="link nav-link"><UserCircle size={28} /></Link></li>
                            <li className="nav-item px-2"><Link to="/carrito" className="link nav-link"><ShoppingCartSimple size={28} /></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default HeaderDos;
