import { Star } from "@phosphor-icons/react";

const Favorites = () => {
    return (
        <section className="favorites p-5">
            <h1 className="fw-bold ">Mis favoritos</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4 ">
                <div className="col">
                    <div className="card p-2">
                        <img src="img/products/Procesador Intel Core i9-12900K.svg" className="card-img-top" alt="Producto 1" />
                        <div className="card-body ">
                            <h5 className="card-title">Intel Core i9-12900K</h5>
                            <p className="card-text fw-light">Procesador de alta gama para juegos y edición de vídeo.</p>
                            <ul className="list-unstyled ">
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-muted"><Star size={16} /></li>
                                <li className="d-inline text-muted"><Star size={16} /></li>
                            </ul>
                            <h5 className="fw-semibold price pb-2">$169.99</h5>
                            <div className="text-center w-100">
                                <a href="#" > <button className="btn btn-primary rounded-pill w-100 my-2">Añadir al carrito</button></a>
                                <button className="btn btn-outline-danger rounded-pill w-100">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-2">
                        <img src="img/products/MacBook Air M1.svg" className="card-img-top" alt="Producto 1" />
                        <div className="card-body ">
                            <h5 className="card-title">MacBook Air M1</h5>
                            <p className="card-text fw-light">Portátil ligero con chip M1 para un rendimiento potente y eficiente.</p>
                            <ul className="list-unstyled ">
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-muted"><Star size={16} /></li>
                                <li className="d-inline text-muted"><Star size={16} /></li>
                            </ul>
                            <h5 className="fw-semibold price pb-2">$1,200.00</h5>
                            <div className="text-center w-100">
                                <a href="#" > <button className="btn btn-primary rounded-pill w-100 my-2">Añadir al carrito</button></a>
                                <button className="btn btn-outline-danger rounded-pill w-100">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-2">
                        <img src="img/products/Camara Sony Alpha A6400.svg" className="card-img-top" alt="Producto 1" />
                        <div className="card-body ">
                            <h5 className="card-title">Cámara Sony Alpha A6400</h5>
                            <p className="card-text fw-light">Mirrorless con enfoque rápido y calidad de imagen excepcional.</p>
                            <ul className="list-unstyled ">
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-warning"><Star size={16} /></li>
                                <li className="d-inline text-muted"><Star size={16} /></li>
                                <li className="d-inline text-muted"><Star size={16} /></li>
                            </ul>
                            <h5 className="fw-semibold price pb-2">$169.99</h5>
                            <div className="text-center w-100">
                                <a href="#" > <button className="btn btn-primary rounded-pill w-100 my-2">Añadir al carrito</button></a>
                                <button className="btn btn-outline-danger rounded-pill w-100">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Favorites;