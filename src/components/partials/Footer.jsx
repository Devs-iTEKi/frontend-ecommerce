import { ClockClockwise, Truck, Cardholder, Headset, FacebookLogo, WhatsappLogo, InstagramLogo } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer footer-container py-4   text-white ">
      <div className="container mt-4 mb-4">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 ">
            <img src="/img/logo/iteki-white.svg" height="100" width="250" alt="Logo" className="img-fluid mb-2" />
            <p className="fw-light">2024</p>
          </div>
          <div className="col-md-3 footer-section md-0">
            <Link to="/nosotros" className="text-decoration-none text-white"><h5 className="fw-normal">Sobre nosotros</h5></Link>
            <ul className="list-unstyled pt-2">
              <li className="fw-light"><Link to="/nosotros" className="text-decoration-none text-white">¿Quiénes somos?</Link></li>
              <li className="fw-light"><Link to="/nosotros" className="text-decoration-none text-white">Nuestra Historia</Link></li>
              <li className="fw-light"><Link to="/nosotros" className="text-decoration-none text-white">Misión</Link></li>
              <li className="fw-light"><Link to="/nosotros" className="text-decoration-none text-white">Visión</Link></li>
            </ul>
          </div>
          <div className="col-md-3 footer-section md-0">
            <h5 className="fw-normal">Ayuda y seguridad</h5>
            <ul className="list-unstyled pt-2">
              <li className="fw-light"><Link to="/terminos" className="text-decoration-none text-white">Términos y condiciones</Link></li>
              <li className="fw-light"><Link to="/politicas" className="text-decoration-none text-white">Políticas de seguridad</Link></li>
              <li className="fw-light"><Link to="/preguntas" className="text-decoration-none text-white">Preguntas frecuentes</Link></li>
              <li className="fw-light"><Link to="/contactos" className="text-decoration-none text-white">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mb-4 d-flex align-items-center">
          <div className="col-6 col-md-3 border-end border-white py-4 ">
            <div className="d-flex flex-column align-items-center">
              <ClockClockwise size={48} className="m-4" />
              <span className="text-center fw-light">Lo más actualizado</span>
            </div>
          </div>
          <div className="col-6 col-md-3 border-end border-white py-4">
            <div className="d-flex flex-column align-items-center">
              <Truck size={48} className="m-4" />
              <span className="text-center fw-light">Envíos a todo el país</span>
            </div>
          </div>
          <div className="col-6 col-md-3 border-end border-white py-4">
            <div className="d-flex flex-column align-items-center">
              <Cardholder size={48} className="m-4" />
              <span className="text-center fw-light">Pagos seguros</span>
            </div>
          </div>
          <div className="col-6 col-md-3 py-4">
            <div className="d-flex flex-column align-items-center">
              <Headset size={48} className="m-4" />
              <span className="text-center fw-light">Servicio de ayuda</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-4">
        <hr className="bg-white my-4" />
        <div className="row">
          <div className="col-10">
            <p>© 2024 Copyright  ITEKI Inc. Todos los derechos reservados</p>
          </div>
          <ul className="list-unstyled col-2 text-center">
            <WhatsappLogo size={32} />
            <InstagramLogo size={32} />
            <FacebookLogo size={32} />
          </ul>
        </div>
      </div>
    </footer>

  );
}
export default Footer;