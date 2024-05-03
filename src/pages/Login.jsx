import React from 'react'

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card my-5 bg-white">
                        {/* < div className="card-header text-center">{{ __('Login') }}</div> */}

                        <div className="card-body row justify-content-center">

                            <div className="col-xs-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 text-center">
                                <img src="img/logo/4.png" className="card-img-top" alt="Logo"/>
                            </div>

                            <div className="col-xs-10 col-sm-9 col-md-8 col-lg-5 col-xl-6">
                                <form method="POST" action="/home">
                                    {/* xs <576px	 sm≥576px	md≥768px	lg≥992px	xl≥1200px	xxl≥1400px */}

                                    <div className="row my-4">
                                        <label htmlFor="email" className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-form-label text-xs-start text-md-start text-lg-start text-xl-start">Correo electrónico</label>

                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <input id="email" type="email" className="form-control" name="email" required autoComplete="email" autoFocus />
                                            <span className="invalid-feedback" role="alert"/>
                                        </div>
                                    </div>

                                    <div className="row my-4">
                                        <label htmlFor="password" className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-form-label text-xs-start text-md-start text-lg-start text-xl-start">Contraseña</label>

                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <input id="password" type="password" className="form-control" name="password" required autoComplete="current-password"/>

                                            <span className="invalid-feedback" role="alert"/>
                                        </div>
                                    </div>

                                    <div className="row my-4">
                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" id="remember" />

                                                <label className="form-check-label" htmlFor="remember">Recordar</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row my-4 text-center">
                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <button type="submit" className="btn btn-primary" href="/Home">
                                                Iniciar sesión
                                            </button>

                                            <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                                <a className="btn btn-link" href="#">
                                                    ¿Olvidaste tu contraseña?
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
