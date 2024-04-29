

const Home = () => {

    return (
        <section className="home">
            <div className="carousel-home d-none d-sm-block">
                <div id="carouselHomeTabletDesktop" className="carousel carousel-dark slide" data-bs-touch="false">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src="/img/carousel-home/iPhone 15 Pro Max.svg" className=" w-100" alt="iPhone 15 Pro Max" />
                            <div className="carousel-caption text-center pt-4 mt-4 top-0">
                                <h1 className="mb-3 fw-semibold">iPhone 15 Pro Max</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src="/img/carousel-home/Huawei Mate X.svg" className=" w-100" alt="Huawei Mate X" />
                            <div className="carousel-caption text-center pt-4 mt-4 top-0">
                                <h1 className="mb-3 fw-semibold">Huawei Mate X</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home/Sony WH-1000XM4.svg" className=" w-100" alt="Sony WH-1000XM4" />
                            <div className="carousel-caption text-center pt-4 mt-4 top-0">
                                <h1 className="mb-3 fw-semibold">Sony WH-1000XM4</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home/HP EliteBook.svg" className=" w-100" alt="HP EliteBook" />
                            <div className="carousel-caption text-center pt-4 mt-4 top-0">
                                <h1 className="mb-3 fw-semibold">HP EliteBook</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home/Canon PowerShot G7 X Mark III.svg" className="w-100"
                                alt="Canon PowerShot G7 X Mark III" />
                            <div className="carousel-caption text-center pt-4 mt-4 top-0">
                                <h1 className="mb-3 fw-semibold">Canon PowerShot G7 X Mark III</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home/Keychron K2 V2.svg" className="w-100"
                                alt="Keychron K2 V2" />
                            <div className="carousel-caption text-center pt-4 mt-4 top-0">
                                <h1 className="mb-3 fw-semibold">Keychron K2 V2</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar
                                    ahora</button></a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomeTabletDesktop"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselHomeTabletDesktop"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="carousel-home-mobile d-md-none d-block">
                <div id="carouselHomeMobile" class="carousel carousel-dark slide">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src="/img/carousel-home-d/iPhone 15 Pro Max.svg" className="w-100" alt="iPhone 15 Pro Max" />
                            <div className="carousel-caption text-center top-0 pt-4 mt-4">
                                <h1 className="mb-3 fw-semibold">iPhone 15 Pro Max</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home-d/Huawei Mate X.svg" className="w-100" alt="Huawei Mate X" />
                            <div className="carousel-caption text-center top-0 pt-4 mt-4">
                                <h1 className="mb-3 fw-semibold">Huawei Mate X</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home-d/Sony WH-1000XM4.svg" className="w-100" alt="Sony WH-1000XM4" />
                            <div className="carousel-caption text-center top-0 pt-4 mt-4">
                                <h1 className="mb-3 fw-semibold">Sony WH-1000XM4</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home-d/HP EliteBook.svg" className="w-100" alt="HP EliteBook" />
                            <div className="carousel-caption text-center top-0 pt-4 mt-4">
                                <h1 className="mb-3 fw-semibold">HP EliteBook</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home-d/Canon PowerShot G7 X Mark III.svg" className="w-100" alt="Canon PowerShot G7 X Mark III" />
                            <div className="carousel-caption text-center top-0 pt-4 mt-4">
                                <h1 className="mb-3 fw-semibold">Canon PowerShot G7 X Mark III</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar ahora</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/carousel-home-d/Keychron K2 V2.svg" className="w-100" alt="Keychron K2 V2" />
                            <div className="carousel-caption text-center top-0 pt-4 mt-4">
                                <h1 className="mb-3 fw-semibold">Keychron K2 V2</h1>
                                <a href="#"><button type="button" className="btn btn-primary rounded-pill py-2 px-4">Comprar ahora</button></a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomeMobile"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselHomeMobile"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="categories p-5 container-fluid mt-5 mb-5">
                <h1 className="text-center mb-5 fw-bold">Categorías principales</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col mb-3">
                        <a href="#">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title text-dark text-center fw-semibold">Dispositivos</h2>
                                    <img src="/img/categories/devices.svg" className="card-img" alt="devices" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col mb-3">
                        <a href="#">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title text-dark text-center fw-semibold">Periféricos</h2>
                                    <img src="/img/categories/peripherals.svg" className="card-img" alt="peripherals" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col mb-3">
                        <a href="#">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title text-dark text-center fw-semibold">Audio</h2>
                                    <img src="/img/categories/audio.svg" className="card-img" alt="audio" />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col mb-3">
                        <a href="#">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title text-dark text-center fw-semibold">Accesorios</h2>
                                    <img src="/img/categories/accesories.svg" className="card-img" alt="accesories" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-5 carousel-brands">
                <h1 className="text-center mb-5 fw-bold">Tenemos lo que buscas</h1>
                <div className="carousel">
                    <div className='slider'>
                        <div className="slide-track">
                            <div className="slide">
                                <img src="/img/brands/acer.svg" height="100" width="250" alt="apple" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/amd.svg" height="100" width="250" alt="asus" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/apple.svg" height="100" width="250" alt="hp" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/asus.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/avg.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/canon.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/dell.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="img/brands/eset.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/hp.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/huawei.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/intel.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/jbl.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/keychron.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/kingston.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/klipxtreme.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/leica.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/lenovo.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/logitech.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/microsoft.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="img/brands/nikon.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/norton.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/samsung.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/sony.svg" height="100" width="250" alt="" />
                            </div>
                            <div className="slide">
                                <img src="/img/brands/xiaomi.svg" height="100" width="250" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                <div className="container mt-5 mb-5">
                    <h2 className="text-center mb-5 fw-semibold">Nuestros clientes lo confirman</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-6 g-3">
                        <div className="col">
                            <div className="card h-100">
                                <p className="fw-light p-2">¡Increíble! Mi nuevo smartphone tiene un rendimiento impecable. La cámara es de alta calidad y la batería dura todo el día. ¡Gracias por ofrecer productos de primera!</p>
                                <div className="row align-items-center justify-content-center mx-auto mb-2">
                                    <div className="col-4 ">
                                        <img src="/img/testimonials/1.svg" className="rounded-circle img-fluid" width={50} alt="Testimonial 1" />
                                    </div>
                                    <div className="col-8 ">
                                        <p className="fw-regular my-auto">Carolina Gómez</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <p className="fw-light p-2">Estoy impresionado con la velocidad y la potencia de mi nueva laptop. Puedo trabajar sin problemas en múltiples tareas. Definitivamente, una excelente inversión para mi trabajo.</p>
                                <div className="row align-items-center justify-content-center mx-auto mb-2">
                                    <div className="col-4 ">
                                        <img src="/img/testimonials/2.svg" className="rounded-circle img-fluid" width={50} alt="Testimonial 1" />
                                    </div>
                                    <div className="col-8">
                                        <p className="fw-regular my-auto">Fernando Zelaya</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <p className="fw-light p-2">Los auriculares inalámbricos que adquirí aquí son una maravilla. La calidad del sonido es excepcional y la comodidad de uso es insuperable. ¡Los recomiendo!</p>
                                <div className="row align-items-center justify-content-center mx-auto mb-2">
                                    <div className="col-4">
                                        <img src="/img/testimonials/3.svg" className="rounded-circle img-fluid" width={50} alt="Testimonial 1" />
                                    </div>
                                    <div className="col-8">
                                        <p className="fw-regular my-auto">Daniela Canizalez</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <p className="fw-light p-2">Mi experiencia gaming ha mejorado significativamente. La calidad de imagen y la fluidez son impresionantes. ¡Gracias por ofrecer productos de alta gama!</p>
                                <div className="row align-items-center justify-content-center mx-auto mb-2">
                                    <div className="col-4">
                                        <img src="/img/testimonials/5.svg" className="rounded-circle img-fluid" width={50} alt="Testimonial 1" />
                                    </div>
                                    <div className="col-8">
                                        <p className="fw-regular my-auto">Carlos Martínez</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <p className="fw-light p-2">La tableta que adquirí en esta tienda ha facilitado mi trabajo. Su versatilidad y rendimiento me permiten ser más productivo en cualquier lugar. ¡Excelente elección!</p>
                                <div className="row align-items-center justify-content-center mx-auto mb-2">
                                    <div className="col-4">
                                        <img src="/img/testimonials/4.svg" className="rounded-circle img-fluid" width={50} alt="Testimonial 1" />
                                    </div>
                                    <div className="col-8">
                                        <p className="fw-regular my-auto">Paola Fernández</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <p className="fw-light p-2">Los accesorios que compré aquí complementan perfectamente mis dispositivos. Todo es de calidad y cumple con mis expectativas. ¡Gracias por el excelente servicio!</p>
                                <div className="row align-items-center justify-content-center mx-auto mb-2">
                                    <div className="col-4">
                                        <img src="/img/testimonials/6.svg" className="rounded-circle img-fluid" width={50} alt="Testimonial 1" />
                                    </div>
                                    <div className="col-8">
                                        <p className="fw-regular my-auto">Rodrigo Colindres</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-light py-5">
                <div className="container">
                    <h1 className="text-center mb-5 fw-bold">Recibe ofertas y novedades</h1>
                    <form className="text-start mb-4">
                        <div className="mb-3 col-8 mx-auto">
                            <label htmlFor="inputName" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputName" placeholder="Ingresa tu nombre" />
                        </div>
                        <div className="mb-3 col-8 mx-auto">
                            <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Ingresa tu correo" />
                        </div>

                    </form>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary rounded-pill px-4">Suscribirse</button>
                    </div>
                </div>
            </div>
            <div className="bg-image position-relative">
                <div className="container text-center py-4 position-absolute bottom-0 start-50 translate-middle-x">
                    <h2 className="text-light fw-bold fst-italic">Descubre tu futuro tecnológico con nosotros</h2>
                </div>
            </div>
        </section >

    );
}

export default Home;