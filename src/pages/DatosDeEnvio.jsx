import { CaretLeft,  } from "@phosphor-icons/react";
const DatosDeEnvio = () => {
  return (
    <section>
        <div className="container-fluid pt-5">
            <div className="row justify-content-start">
                <div className="col-11">
                    <div className="h-100  w-100 container-fluid d-flex justify-content-start align-items-center">
                        <a className="fs-1 text-black" href="" style="text-decoration: none; color: inherit;"><i className="ph ph-caret-left"></i></a>
                        <h1 className="px-3 text-black">Datos de envío</h1>
                       
                    </div>
                </div>
                <div className="col">
                    <div className="h-100  w-100 container-fluid d-flex justify-content-end align-items-center">
                        <a className="fs-1 text-black" href="" style="text-decoration: none; color: inherit;"/>                    <a className="fs-1 text-black " href=""><i className="ph ph-caret-right"></i></a>                      
                    </div>
                </div>
                
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col ">
                    <div className="container-fluid mt-5 shadow-lg p-3 mb-5 bg-body-tertiary ">
                        
                        
                        <div className="m-5 py-3">
                            <div className="d-flex m-3 py-2">
                                <div className="form w-50 pe-3 text-body-tertiary">
                                    <input type="text" className="form-control p-3" id="floatingPassword" placeholder="País"/>
                                </div>
                                <div className="form w-50 ps-3 text-body-tertiary">
                                  
                                    <input type="text" className="form-control p-3" id="floatingPassword" placeholder="Departamento"/>
                                </div>
                            </div>
                            <div className="d-flex m-3 py-2">
                                <div className="form w-50 pe-3 text-body-tertiary">
                                    
                                    <input type="text" className="form-control p-3" id="floatingPassword" placeholder="Municipio"/>
                                </div>
                                <div className="form w-50 ps-3 text-body-tertiary">
                                   
                                    <input type="text" className="form-control p-3" id="floatingPassword" placeholder="Distrito"/>
                                </div>
                            </div>
                            <div className="form m-3 py-2 text-body-tertiary">
                                
                                <input type="text" className="form-control p-3"  placeholder="Dirección"/>
                            </div>
                            <div className="form m-3 py-2 text-body-tertiary">
                                
                                <input type="text" className="form-control p-3"  placeholder="Punto de referencia"/>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="col-4">
                    
                   <div className="container-fluid  text-center">
                        <h4 className="py-5 ">Resumen de la compra</h4>
                   </div>
                   <div className="container-fluid py-2 border-bottom">
                   </div>
                   <div className="container-fluid d-flex justify-content-between pt-3">
                        <h5>Sub total:</h5><span className="px-5"> $350.00</span>
                   </div>
                   <div className="container-fluid d-flex justify-content-between  pt-3">
                        <h5 className="">Costo de envío:</h5><span className="px-5"> $00.00</span>
                   </div>
                   <div >
                   <div className="container-fluid py-2 border-bottom">
                   </div>
                   <div className="container-fluid d-flex justify-content-between align-items-center pt-3">
                    <h5>Total por la compra:</h5><span className="fs-2 fw-medium text-primary px-5"> $350.00</span>
               </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DatosDeEnvio;