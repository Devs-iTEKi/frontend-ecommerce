
import { Star } from "@phosphor-icons/react";

const Shop = () => {

    return (
        <section Name="shop">
            <div className="carousel-shop d-none d-sm-block">
                <div id="carouselShopTabletDesktop" className="carousel slide carousel-dark">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src="img/shop-ads-md/all-apple.svg" className="w-100 d-none d-md-block d-lg-none" alt="..." />
                            <img src="img/shop-ads/all-apple.svg" className="w-100 d-none d-lg-block" alt="..." />
                            <div className="carousel-caption text-start align-items-center h-75">
                                <h1 className="mb-3 fw-bold">20% DE DESCUENTO</h1>
                                <h3 className="mb-3 fw-semibold">¡Todos los productos de Apple!</h3>
                                <p className="fw-light">Válido desde el abr. 30. 2024 - may. 10. 2024</p>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="img/shop-ads-md/all-audio.svg" className=" w-100 d-none d-md-block d-lg-none" alt="..." />
                            <img src="img/shop-ads/all-audio.svg" className=" w-100 d-none d-lg-block" alt="..." />
                            <div className="carousel-caption text-start align-items-center h-75">
                                <h1 className="mb-3 fw-bold">10% DE DESCUENTO</h1>
                                <h3 className="mb-3 fw-semibold">¡Todos los productos de Audio!</h3>
                                <p className="fw-light">Válido desde el abr. 30. 2024 - may. 10. 2024</p>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="img/shop-ads-md/all-software.svg" className=" w-100 d-none d-md-block d-lg-none" alt="..." />
                            <img src="img/shop-ads/all-software.svg" className=" w-100 d-none d-lg-block" alt="..." />
                            <div className="carousel-caption text-start align-items-center h-75">
                                <h1 className="mb-3 fw-bold">5% DE DESCUENTO</h1>
                                <h3 className="mb-3 fw-semibold">¡Todas las licencias de Microsoft!</h3>
                                <p className="fw-light">Válido desde el abr. 30. 2024 - may. 10. 2024</p>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselShopTabletDesktop" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselShopTabletDesktop" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="carousel-shop-mobile d-md-none d-block">
                <div id="carouselShopMobile" className="carousel slide carousel-dark">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src="img/shop-ads-d/all-apple.svg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption text-center top-0 mt-2">
                                <h1 className="mb-3 fw-bold">20% DE DESCUENTO</h1>
                                <h3 className="mb-3 fw-semibold">¡Todos los productos de Apple!</h3>
                                <p className="fw-light">Válido desde el abr. 30. 2024 - may. 10. 2024</p>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="img/shop-ads-d/all-audio.svg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption text-center top-0 mt-2">
                                <h1 className="mb-3 fw-bold">10% DE DESCUENTO</h1>
                                <h3 className="mb-3 fw-semibold">¡Todos los productos de Audio!</h3>
                                <p className="fw-light">Válido desde el abr. 30. 2024 - may. 10. 2024</p>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="img/shop-ads-d/all-software.svg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption text-center top-0 mt-2">
                                <h1 className="mb-3 fw-bold">5% DE DESCUENTO</h1>
                                <h3 className="mb-3 fw-semibold">¡Todas las licencias de Microsoft!</h3>
                                <p className="fw-light">Válido desde el abr. 30. 2024 - may. 10. 2024</p>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselShopMobile" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselShopMobile" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Dispositivos
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Desktop</a></li>
                                        <li><a className="dropdown-item" href="#">Laptops</a></li>
                                        <li><a className="dropdown-item" href="#">Tablets</a></li>
                                        <li><a className="dropdown-item" href="#">Smartphones</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Periféricos
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Teclados</a></li>
                                        <li><a className="dropdown-item" href="#">Mouses</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Audio
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Audífonos</a></li>
                                        <li><a className="dropdown-item" href="#">Bocinas</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Accesorios
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cables y cargadores</a></li>
                                        <li><a className="dropdown-item" href="#">Adaptadores</a></li>
                                        <li><a className="dropdown-item" href="#">Memoria USB</a></li>
                                        <li><a className="dropdown-item" href="#">Bases y soportes</a></li>
                                        <li><a className="dropdown-item" href="#">Protectores y fundas</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Imagen
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Cámaras</a></li>
                                        <li><a className="dropdown-item" href="#">Impresoras</a></li>
                                        <li><a className="dropdown-item" href="#">Proyectores</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Componentes
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Placa madre</a></li>
                                        <li><a className="dropdown-item" href="#">Memoria RAM</a></li>
                                        <li><a className="dropdown-item" href="#">Tarjeta gráfica</a></li>
                                        <li><a className="dropdown-item" href="#">Procesador</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Software
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Sistemas operativos</a></li>
                                        <li><a className="dropdown-item" href="#">Antivirus y seguridad</a></li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*  <!-- 
                *Definir si se colocaría la búsqueda y el filtro
                
                    <div className="mx-4">
                    <i className="ph ph-magnifying-glass nav-item  text-white"></i>
                    <i className=" ph ph-funnel-simple  nav-item text-white"></i>
                </div> 
                --> */}
                </nav>

            </div>
            <div className="list-products my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4 mx-4">
                    <div className="col">
                        <div className="card border-0">
                            <img src="img/products/Auriculares Sony WH-1000XM4.svg" className="card-img-top" alt="Producto 1"/>
                                <div className="card-body ">
                                    <h5 className="card-title">Auriculares Sony WH-1000XM4</h5>
                                    <p className="card-text fw-light">Inalámbricos con cancelación de ruido y sonido de alta calidad.</p>
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                        </ul>
                                    </div>
                                    <h5 className="fw-semibold price pb-2">$299.99</h5>
                                    <div className="text-center w-100">
                                        <a href="#" className="btn btn-outline-primary rounded-pill w-100">Añadir al carrito</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="img/products/AVG Internet Security.svg" className="card-img-top" alt="Producto 1"/>
                                <div className="card-body ">
                                    <h5 className="card-title">AVG Internet Security</h5>
                                    <p className="card-text fw-light">Software de seguridad completo con protección en tiempo real y cortafuegos.</p>
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                        </ul>
                                    </div>
                                    <h5 className="fw-semibold price pb-2">$29.99</h5>
                                    <div className="text-center w-100">
                                        <a href="#" className="btn btn-outline-primary rounded-pill w-100">Añadir al carrito</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="img/products/Camara Sony Alpha A6400.svg" className="card-img-top" alt="Producto 1"/>
                                <div className="card-body ">
                                    <h5 className="card-title">Cámara Sony Alpha A6400</h5>
                                    <p className="card-text fw-light">Mirrorless con enfoque rápido y calidad de imagen excepcional.</p>
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                        </ul>
                                    </div>
                                    <h5 className="fw-semibold price pb-2">$900.00</h5>
                                    <div className="text-center w-100">
                                        <a href="#" className="btn btn-outline-primary rounded-pill w-100">Añadir al carrito</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="img/products/Funda para iPhone 13 Pro Max.svg" className="card-img-top" alt="Producto 1"/>
                                <div className="card-body ">
                                    <h5 className="card-title">Funda para iPhone 13 Pro Max</h5>
                                    <p className="card-text fw-light">Funda resistente para proteger tu iPhone contra caídas y arañazos.</p>
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                        </ul>
                                    </div>
                                    <h5 className="fw-semibold price pb-2">$19.99</h5>
                                    <div className="text-center w-100">
                                        <a href="#" className="btn btn-outline-primary rounded-pill w-100">Añadir al carrito</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="img/products/HP Spectre x360.svg" className="card-img-top" alt="Producto 1"/>
                                <div className="card-body ">
                                    <h5 className="card-title">HP Spectre x360</h5>
                                    <p className="card-text fw-light">Portátil convertible con diseño elegante y alto rendimiento.</p>
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                        </ul>
                                    </div>
                                    <h5 className="fw-semibold price pb-2">$1,819.95</h5>
                                    <div className="text-center w-100">
                                        <a href="#" className="btn btn-outline-primary rounded-pill w-100">Añadir al carrito</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="img/products/Lenovo Yoga C940.svg" className="card-img-top" alt="Producto 1"/>
                                <div className="card-body ">
                                    <h5 className="card-title">Lenovo Yoga C940</h5>
                                    <p className="card-text fw-light">Portátil versátil con pantalla táctil 4K y altavoces Dolby Atmos</p>
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-muted" ><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                        </ul>
                                    </div>
                                    <h5 className="fw-semibold price pb-2">$899.99</h5>
                                    <div className="text-center w-100">
                                        <a href="#" className="btn btn-outline-primary rounded-pill w-100">Añadir al carrito</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="img/products/MacBook Air M1.svg" className="card-img-top" alt="Producto 1"/>
                                <div className="card-body ">
                                    <h5 className="card-title">MacBook Air M1</h5>
                                    <p className="card-text fw-light">Portátil ligero con chip M1 para un rendimiento potente y eficiente.</p>
                                    <div>
                                        <ul className="list-unstyled">
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                        </ul>
                                    </div>
                                    <h5 className="fw-semibold price pb-2">$1,200.00</h5>
                                    <div className="text-center w-100">
                                        <a href="#" className="btn btn-outline-primary rounded-pill w-100">Añadir al carrito</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0">
                            <img src="img/products/Procesador Intel Core i9-12900K.svg" className="card-img-top" alt="Producto 1"/>
                                <div className="card-body ">
                                    <h5 className="card-title">Intel Core i9-12900K</h5>
                                    <p className="card-text fw-light">Procesador de alta gama para juegos y edición de vídeo.</p>
                                    <div>
                                        <ul className="list-unstyled ">
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-warning"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                            <li className="d-inline text-muted"><Star size={16}/></li>
                                        </ul>
                                    </div>
                                    <h5 className="fw-semibold price pb-2">$169.99</h5>
                                    <div className="text-center w-100">
                                        <a href="#" className="btn btn-outline-primary rounded-pill w-100">Añadir al carrito</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Shop;