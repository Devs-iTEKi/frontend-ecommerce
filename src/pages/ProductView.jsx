import { Star, HeartStraight, CaretLeft } from "@phosphor-icons/react";

const ProductView = () => {

    return (
        <section className="productView">
            <CaretLeft size={40} className="m-4" />


            <div className="container mt-4">
                <div className="row align-items-center justify-content-center">
                    {/* Imagen del producto */}
                    <div className="col-lg-4 col-md-4 mb-4">
                        <img src="img/products/Auriculares Sony WH-1000XM4.svg" className="img-fluid" alt="Producto" />
                    </div>
                    {/* Detalles del producto */}
                    <div className="col-lg-8 col-md-8 mb-4">
                        <h1 className="fw-bold">Auriculares Sony WH-1000XM4</h1>
                        <div className="d-flex my-2">
                            {/* Lista de estrellas */}
                            <ul className="list-unstyled">
                                <li className="d-inline text-warning"><Star size={20} /></li>
                                <li className="d-inline text-warning"><Star size={20} /></li>
                                <li className="d-inline text-warning" ><Star size={20} /></li>
                                <li className="d-inline text-muted"><Star size={20} /></li>
                                <li className="d-inline text-muted"><Star size={20} /></li>
                            </ul>
                        </div>
                        <h2 className="fw-semibold price">$299.99</h2>
                        <p> Inalámbricos con cancelación de ruido y sonido de alta calidad.</p>

                        {/* Botones de favorito y carrito */}
                        <div className="row align-items-center justify-content-center justify-content-md-start"> {/* Control de alineación */}
                            <div className="col-md-2 mb-3 mb-md-0"> {/* Establece el ancho para dispositivos de tamaño medio */}
                            <HeartStraight size={32} />
                            </div>
                            <div className="col-md-6"> {/* Establece el ancho para dispositivos de tamaño medio */}
                                <button className="btn btn-primary rounded-pill px-4 w-100">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default ProductView;