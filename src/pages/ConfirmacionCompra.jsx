import React from 'react'

const ConfirmacionCompra = () => {
    return (
        <div className="container">
            <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-header">
                    <h4 className="card-title">¡Gracias por tu compra!</h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="card-title">Información del cliente</h5>
                            <p>
                                <strong>Nombre:</strong> Carlos Roberto Escalante Zelaya
                            </p>
                            <p>
                                <strong>Teléfono:</strong> +503 7294 1341
                            </p>
                            <p>
                                <strong>Correo:</strong> carloses@gmail.com
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="card-title">Información de envío</h5>
                            <p>
                                <strong>País:</strong> El Salvador
                            </p>
                            <p>
                                <strong>Municipio:</strong> San Salvador
                            </p>
                            <p>
                                <strong>Dirección:</strong> Colonia Altos de Guadalupe, 9na Avenida, 8 Calle Sur, Pasaje 7,
                                Casa 8
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="card-title">Método de pago</h5>
                            <i className="fab fa-cc-visa icon"></i>
                            <p>
                                <strong>Número de tarjeta:</strong> 4111 1111 1111 1111
                            </p>
                            <p>
                                <strong>Fecha de expiración:</strong> 05/28
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmacionCompra