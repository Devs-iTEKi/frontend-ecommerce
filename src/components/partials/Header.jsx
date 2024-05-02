import React from 'react';

const Header = () => {
  return (
    <div>

      {/* Agrega el enlace al CSS de Bootstrap */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      {/* Agrega el enlace a Font Awesome para los iconos */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#" />
        {/* <img src="ruta-del-logo" alt="Logo" width="80" height="40"> */}
        {/* Botón para colapsar el navbar en dispositivos pequeños */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Enlace de Tienda */}
            <li className="nav-item">
              <a className="nav-link" href="/home">Tienda</a>
            </li>
            {/* Enlace de Registro */}
            <li className="nav-item">
              <a className="nav-link" href="/DatosDeEnvio">Registro</a>
            </li>
            {/* Enlace de Inicio de Sesión */}
            <li className="nav-item">
              <a className="nav-link" href="/Login">Iniciar Sesión</a>
            </li>
            {/* Icono de Favoritos */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-heart"></i>
              </a>
            </li>
            {/* Icono de Carrito de Compra */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Agrega los enlaces al JavaScript de Bootstrap y Font Awesome */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Header;