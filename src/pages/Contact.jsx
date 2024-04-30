import { Building, Envelope, WhatsappLogo, Clock, Headset, ShareNetwork } from "@phosphor-icons/react";

const Contact = () => {
    return (
        <section className="container-fluid p-lg-5 p-4 contact">
            <h1 className="fw-bold mb-4">Contáctanos</h1>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                    <div className="card p-4 h-40 justify-content-center mb-4">
                        <div className="row" >
                            <div className="col-4 text-center d-flex justify-content-center align-items-center">
                                <Building size={80} className="icon-contact" />
                            </div>
                            <div className="col-8">
                                <h2>Ubicación</h2>
                                <p className="text-muted my-auto ">Edificio Avante, Piso #8, Bulevar Luis Poma, Antiguo Cuscatlán, La Libertad. </p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 h-40 justify-content-center mb-4">
                        <div className="row" >
                            <div className="col-4 text-center d-flex justify-content-center align-items-center">
                                <Envelope size={80} className="icon-contact" />
                            </div>
                            <div className="col-8">
                                <h2>Correo electrónico</h2>
                                <p className="text-muted my-auto">iteki_servicio@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 h-40 justify-content-center mb-4">
                        <div className="row" >
                            <div className="col-4 text-center d-flex justify-content-center align-items-center">
                            <WhatsappLogo size={80} className="icon-contact" />
                            </div>
                            <div className="col-8">
                            <h2>WhatsApp</h2>
                                <p className="text-muted my-auto">+503 2423 7688</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mb-3">
                    <div className="card p-4 h-40 justify-content-center mb-4">
                        <div className="row" >
                            <div className="col-4 text-center d-flex justify-content-center align-items-center">
                            <Clock size={80} className="icon-contact" />
                            </div>
                            <div className="col-8">
                            <h2>Horario de atención</h2>
                                <p className="text-muted my-auto">Lunes a Domingo </p>
                                <p className="text-muted my-auto">8:00 AM a 8:00 PM </p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 h-40 justify-content-center mb-4">
                        <div className="row" >
                            <div className="col-4 text-center d-flex justify-content-center align-items-center">
                            <Headset size={80} className="icon-contact" />
                            </div>
                            <div className="col-8">
                            <h2>Call Center</h2>
                                <p className="text-muted my-auto">+503 2423 7688</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-4 h-40 justify-content-center mb-4">
                        <div className="row" >
                            <div className="col-4 text-center d-flex justify-content-center align-items-center">
                            <ShareNetwork size={80} className="icon-contact" />
                            </div>
                            <div className="col-8">
                            <h2>Redes</h2>
                                <p className="text-muted my-auto">Búscanos como Iteki</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section >
    );
}
export default Contact;