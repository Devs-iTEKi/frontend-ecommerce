import { CaretLeft,  } from "@phosphor-icons/react";
const DatosDeEnvio = () => {
  return (
    <section>
        <div class="container-fluid pt-5">
            <div class="row justify-content-start">
                <div class="col-11">
                    <div class="h-100  w-100 container-fluid d-flex justify-content-start align-items-center">
                        <a class="fs-1 text-black" href="" style="text-decoration: none; color: inherit;"><i class="ph ph-caret-left"></i></a>
                        <h1 class="px-3 text-black">Datos de envío</h1>
                       
                    </div>
                </div>
                <div class="col">
                    <div class="h-100  w-100 container-fluid d-flex justify-content-end align-items-center">
                        <a class="fs-1 text-black" href="" style="text-decoration: none; color: inherit;"/>                    <a class="fs-1 text-black " href=""><i class="ph ph-caret-right"></i></a>                      
                    </div>
                </div>
                
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col ">
                    <div class="container-fluid mt-5 shadow-lg p-3 mb-5 bg-body-tertiary ">
                        
                        
                        <div class="m-5 py-3">
                            <div class="d-flex m-3 py-2">
                                <div class="form w-50 pe-3 text-body-tertiary">
                                    <input type="text" class="form-control p-3" id="floatingPassword" placeholder="País"/>
                                </div>
                                <div class="form w-50 ps-3 text-body-tertiary">
                                  
                                    <input type="text" class="form-control p-3" id="floatingPassword" placeholder="Departamento"/>
                                </div>
                            </div>
                            <div class="d-flex m-3 py-2">
                                <div class="form w-50 pe-3 text-body-tertiary">
                                    
                                    <input type="text" class="form-control p-3" id="floatingPassword" placeholder="Municipio"/>
                                </div>
                                <div class="form w-50 ps-3 text-body-tertiary">
                                   
                                    <input type="text" class="form-control p-3" id="floatingPassword" placeholder="Distrito"/>
                                </div>
                            </div>
                            <div class="form m-3 py-2 text-body-tertiary">
                                
                                <input type="text" class="form-control p-3"  placeholder="Dirección"/>
                            </div>
                            <div class="form m-3 py-2 text-body-tertiary">
                                
                                <input type="text" class="form-control p-3"  placeholder="Punto de referencia"/>
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="col-4">
                    
                   <div class="container-fluid  text-center">
                        <h4 class="py-5 ">Resumen de la compra</h4>
                   </div>
                   <div class="container-fluid py-2 border-bottom">
                   </div>
                   <div class="container-fluid d-flex justify-content-between pt-3">
                        <h5>Sub total:</h5><span class="px-5"> $350.00</span>
                   </div>
                   <div class="container-fluid d-flex justify-content-between  pt-3">
                        <h5 class="">Costo de envío:</h5><span class="px-5"> $00.00</span>
                   </div>
                   <div >
                   <div class="container-fluid py-2 border-bottom">
                   </div>
                   <div class="container-fluid d-flex justify-content-between align-items-center pt-3">
                    <h5>Total por la compra:</h5><span class="fs-2 fw-medium text-primary px-5"> $350.00</span>
               </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DatosDeEnvio;