import { CaretLeft,CaretRight  } from "@phosphor-icons/react";
const PagoCheckOut2 = () => {
  return (
    <section >
        <div class="container-fluid pt-5">
            <div class="row justify-content-start">
                <div class="col">
                    <div class="h-100  w-100 container-fluid d-flex justify-content-start align-items-center">
                        <a class="fs-1 text-black" href="" style="text-decoration: none; color: inherit;"><i class="ph ph-caret-left"></i></a>
                        <h1 class="px-3 text-black">Método de pago</h1>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col ">
                    <div class="container-fluid mt-5 shadow-lg p-3 mb-5 bg-body-tertiary ">
                        <div class="form-check mt-3 fs-4  mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="fw-medium  form-check-label px-4" for="flexCheckDefault">
                             Tarjeta de crédito/débito
                            </label>
                        </div>
                        <div class="border-top">
                        </div>
                        <div class="form-check mt-3 mb-3   fs-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="fw-medium  form-check-label px-4" for="flexCheckDefault">
                             Efectivo
                            </label>
                            <div class="m-5 p-5">
                                <div class="form m-3  text-body-tertiary">
                                    <h5 class="fw-normal">Cantidad con la que pagará</h5>
                                    <input type="text" class="form-control p-3"  placeholder="$400.00"/>
                                </div>
                        
                                <div class=" mt-4">
                                    <div class="form m-3 text-body-tertiary">
                                        <input type="submit" class="fw-semibold form-control bg-primary p-3 text-light"  value="Confirmar"/>
                                    </div>
                                </div>
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

export default PagoCheckOut2;