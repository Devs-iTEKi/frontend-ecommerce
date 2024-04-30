import { Target, Tree } from "@phosphor-icons/react";

const About = () => {
    return (
        <section className="container-fluid p-lg-5 p-4 about">
            <h1 className="fw-bold mb-4">Nosotros</h1>
            <div className="row">
                {/* Texto */}
                <div className="col-12 col-sm-8 order-lg-1 order-2">
                    <h2 className="fw-semibold">¿Quiénes somos?</h2>
                    <p>En iteki, somos un equipo apasionado por ofrecer productos digitales de alta calidad y un servicio excepcional a nuestros clientes. Nos esforzamos por ser líderes en la industria del e-commerce, brindando una plataforma segura y fácil de usar para la compra y entrega de productos digitales.</p>
                    <h2 className="fw-semibold">Nuestra historia</h2>
                    <p>iteki fue fundada en el año 2018 por un grupo de emprendedores con experiencia en tecnología y comercio electrónico. Desde nuestros inicios, nos hemos dedicado a crear una experiencia de compra única para nuestros clientes, enfocándonos en la calidad, la innovación y la satisfacción del cliente. A lo largo de los años, hemos crecido y ampliado nuestra oferta de productos digitales, manteniendo siempre nuestro compromiso con la excelencia y la confianza de nuestros clientes.</p>
                </div>
                {/* Imagen */}
                <div className="col-12 col-sm-4 text-center order-lg-2 order-1">
                    <img src="img/logo/logotipo-bg-0-txt-black.png" className="img-fluid" width={320} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                    <div className="card p-4 text-center h-100 d-flex align-items-center">
                        <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                            <Target size={60} className="about-icon mb-3 " />
                            <h3 className="fw-semibold text-center">Misión</h3>
                            <p>Proporcionar a nuestros clientes acceso fácil y seguro a una amplia gama de productos digitales de alta calidad. Nos esforzamos por ofrecer una experiencia de compra transparente, eficiente y personalizada, respaldada por un equipo dedicado y comprometido con la satisfacción del cliente.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                    <div className="card p-4 text-center h-100 d-flex align-items-center  ">
                        <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                            <Tree size={60} className="about-icon mb-3" />
                            <h3 className="fw-semibold text-center">Visión</h3>
                            <p>Convertirnos en el destino preferido de los consumidores para la compra de productos digitales, reconocidos por nuestra integridad, innovación y excelencia en el servicio al cliente. Nos esforzamos por ser líderes en el mercado global de e-commerce, creando un impacto positivo en la vida de nuestros clientes al proporcionarles soluciones digitales de alta calidad y valor añadido.</p>
                        </div>
                    </div>
                </div>
            </div>




        </section>
    );
}
export default About;