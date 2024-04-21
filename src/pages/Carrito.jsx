import React from 'react'

const Carrito = () => {
    return (
        // <!-- INICIO DIV CENTRAL -->
        <div className="container my-4">
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <h2 className="col">Mi carrito</h2>
                        <h4 className="col text-right text-wrap text-info">Continuar comprando</h4>
                    </div>
                    {/* <!-- DIV INICIO DE IMAGEN DESCRIPCION Y PRECIO --> */}
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {/* <img src="./img/ryzen.png" className="card-img" alt="Imagen del Producto"> */}
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Procesador Ryzen </h5>
                                    <p className="card-text">Procesador Ryzen 5 3600,
                                        6 nucleo 12 hilos 3.5GHz.</p>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button">-</button>
                                        </div>
                                        <input type="text" className="form-control text-center" value="1" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button">+</button>
                                        </div>
                                    </div>
                                    <p className="card-text">Precio: $350.00</p>
                                    <button className="btn btn-danger btn-sm">Eliminar Producto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* <!-- fin imagen 1 --> */}

                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {/* <img src="./img/mouse.png" className="card-img" alt="Imagen del Producto"> */}
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
                                    <button className="btn btn-danger btn-sm">Eliminar Producto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />

                    {/* <!-- fin imagen 2 --> */}
                </div>
                {/* <!-- FIN DIV COL-8 --> */}

                <div className="col-4 my-4">
                    <h4 className="text-center">Resumen de la compra</h4>
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <p>Subtotal:</p>
                        </div>
                        <div className="col-6 text-right">
                            <p>$395.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-6">
                            <p>Total:</p>
                        </div>
                        <div className="col-6 text-right">
                            <p>$395.00</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-info btn-lg btn-block">Completar Pago</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Carrito;