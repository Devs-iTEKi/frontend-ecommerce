import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

const CarritoCheckout = () => {
    return (
        // < !--INICIO DE CONTAINER CENTRAL-- >
        <div className="container">

            <div className="row w-100 my-4">
                <div className="col-1 mt-2"><Link to="/carrito" className="link nav-link"><CaretLeft  size={52} /></Link></div>
                <div className="col-10">
                    <h1>Información del cliente</h1>
                </div>
                <div className="col-1 mt-2"><Link to="/datosDeEnvio" className="link nav-link"><CaretRight size={52} /></Link></div>
            </div>

            {/* <!-- INICIO DE CARD --> */}
            <div className="row">
                <div className="col-9">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 my-4">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Nombre"
                                        aria-label="Search" />
                                </div>
                                <div className="col-6 my-4">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Apellido"
                                        aria-label="Search" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 my-4">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Correo"
                                        aria-label="Search" />
                                </div>
                                <div className="col-2 my-4">
                                    <input className="form-control mr-sm-2" type="tel" placeholder="+503" aria-label="Search" />
                                </div>
                                <div className="col-4 my-4">
                                    <input className="form-control mr-sm-2" type="tel" placeholder="000 000"
                                        aria-label="Search" />
                                </div>
                            </div>
                            <div className="col my-4">
                                <input className="form-control mr-sm-2" type="email" placeholder="Correo Electronico"
                                    aria-label="Search" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- RESUMEN DE LA COMPRA - LADO DERECHO --> */}
                <div className="col-3">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <div className="col-12">
                                <h5><strong>Resumen de la compra</strong></h5>
                                <hr/>
                            </div>

                            <div className="row">
                                <div className="col-6">Subtotal:</div>
                                <div className="col-6">$445.00</div>
                            </div>
                            <div className="row">
                                <div className="col-6">Costo de envio:</div>
                                <div className="col-6">$0.00</div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <h3 className="text-primary">Total: $445.00</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default CarritoCheckout;