import React from 'react'
import { Link } from 'react-router-dom';

const Carrito = () => {
    return (
        // <!-- INICIO DIV CENTRAL -->
        <div className="container my-4">
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <h2 className="col">Mi carrito</h2>
                        <h4 className="col text-right text-wrap text-primary">Continuar comprando</h4>
                    </div>
                    {/* <!-- DIV INICIO DE IMAGEN DESCRIPCION Y PRECIO --> */}
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="img/products/Procesador Intel Core i9-12900K.svg" className="card-img-top" alt="Producto"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Procesador Intel </h5>
                                    <p className="card-text">Procesador Intel i5 10400K,
                                        8 nucleo 16 hilos 3.5GHz.</p>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button">-</button>
                                        </div>
                                        <input type="text" className="form-control text-center" value="1" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button">+</button>
                                        </div>
                                    </div>
                                    <p className="card-text">Precio: $400.00</p>
                                    <button className="btn btn-danger rounded-pill btn-sm">Eliminar Producto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fin imagen 1 --> */}

                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="img/products/Raton Logitech MX Master 3.svg" className="card-img-top" alt="Producto"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Mouse Gaming</h5>
                                    <p className="card-text">Mouse Gaming HyperX .</p>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button">-</button>
                                        </div>
                                        <input type="text" className="form-control text-center" value="1" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button">+</button>
                                        </div>
                                    </div>
                                    <p className="card-text">Precio: $45.00</p>
                                    <button className="btn btn-danger rounded-pill btn-sm">Eliminar Producto</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- fin imagen 2 --> */}
                </div>
                {/* <!-- FIN DIV COL-8 --> */}

                <div className="col-4 my-4">
                    <h4 className="text-center">Resumen de la compra</h4>
                    <hr />
                    <div className="row text-center">
                        <div className="col-6">
                            <p>Subtotal:</p>
                        </div>
                        <div className="col-6 text-center">
                            <p>$445.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row text-center">
                        <div className="col-6">
                            <p>Total:</p>
                        </div>
                        <div className="col-6 text-center">
                            <p>$445.00</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-primary rounded-pill btn-lg btn-block text-white"><Link to="/carritoCheckout" className="link nav-link">Completar Pago</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Carrito;