import React from 'react'

export const Registrate = () => {
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

                                    <div className="row my-1">
                                        <label htmlFor="name" className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-form-label text-xs-start text-md-start text-lg-start text-xl-start">Nombre</label>

                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <input id="name" type="text" className="form-control" name="name" required autoComplete="name" autoFocus />
                                            <span className="invalid-feedback" role="alert"/>
                                        </div>
                                    </div>

                                    <div className="row my-1">
                                        <label htmlFor="lastname" className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-form-label text-xs-start text-md-start text-lg-start text-xl-start">Apellido</label>

                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <input id="lastname" type="text" className="form-control" name="lastname" required autoComplete="email"/>
                                            <span className="invalid-feedback" role="alert"/>
                                        </div>
                                    </div>

                                    <div className="row my-1">
                                        <label htmlFor="email" className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-form-label text-xs-start text-md-start text-lg-start text-xl-start">Correo electrónico</label>

                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <input id="email" type="email" className="form-control" name="email" required autoComplete="email"/>
                                            <span className="invalid-feedback" role="alert"/>
                                        </div>
                                    </div>

                                    <div className="row my-1">
                                        <label htmlFor="password" className="col-xs-12 col-md-12 col-lg-12 col-xl-12 col-form-label text-xs-start text-md-start text-lg-start text-xl-start">Contraseña</label>

                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <input id="password" type="password" className="form-control" name="password" required autoComplete="current-password"/>

                                            <span className="invalid-feedback" role="alert"/>
                                        </div>
                                    </div>


                                    <div className="row my-3 text-center">
                                        <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12">
                                            <button type="submit" className="btn btn-primary" href="/Home">
                                                Regitrarse
                                            </button>
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
export default Registrate