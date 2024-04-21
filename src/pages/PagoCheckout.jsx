import { CaretLeft,  } from "@phosphor-icons/react";
const PagoCheckOut = () => {
  return (
    <section>
      <div className="container-fluid pt-5">
        <div className="row justify-content-start">
          <div className="col">
            <div className="h-100  w-100 container-fluid d-flex justify-content-start align-items-center">
              <a
                className=" text-black"
                href=""
                // style="text-decoration: none; color: inherit;"
              >
                <CaretLeft size={32} />
              </a>
              <h1 className="px-3 text-black">Método de pago</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col ">
            <div className="container-fluid mt-5 shadow-lg p-3 mb-5 bg-body-tertiary ">
              <div className="form-check mt-3 fs-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="fw-medium  form-check-label px-4"
                  htmlFor="flexCheckDefault"
                >
                  Tarjeta de crédito/débito
                </label>
              </div>

              <div className="m-5 ">
                <div className="form m-3 text-body-tertiary">
                  <h5 className="fw-normal">Número de tarjeta</h5>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="1222-1222-2212-1234"
                  />
                </div>
                <div className="d-flex m-3">
                  <div className="form w-50 pe-3 text-body-tertiary">
                    <h5 className="fw-normal">Vencimiento</h5>
                    <input
                      type="date"
                      className="form-control p-3"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form w-50 ps-3 text-body-tertiary">
                    <h5 className="fw-normal">CVC</h5>
                    <input
                      type="password"
                      className="form-control p-3"
                      id="floatingPassword"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div className="form m-3 text-body-tertiary">
                  <h5 className="fw-normal">País</h5>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="El Salvador"
                  />
                </div>
                <div className=" mt-4">
                  <div className="form m-3 text-body-tertiary">
                    <input
                      type="submit"
                      className="fw-semibold form-control bg-primary p-3 text-light"
                      value="Pagar ahora"
                    />
                  </div>
                </div>
              </div>
              <div className="border-top"></div>
              <div className="form-check mt-3 mb-3   fs-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="fw-medium  form-check-label px-4"
                  htmlFor="flexCheckDefault"
                >
                  Efectivo
                </label>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="container-fluid  text-center">
              <h4 className="py-5 ">Resumen de la compra</h4>
            </div>
            <div className="container-fluid py-2 border-bottom"></div>
            <div className="container-fluid d-flex justify-content-between pt-3">
              <h5>Sub total:</h5>
              <span className="px-5"> $350.00</span>
            </div>
            <div className="container-fluid d-flex justify-content-between  pt-3">
              <h5 className="">Costo de envío:</h5>
              <span className="px-5"> $00.00</span>
            </div>
            <div>
              <div className="container-fluid py-2 border-bottom"></div>
              <div className="container-fluid d-flex justify-content-between align-items-center pt-3">
                <h5>Total por la compra:</h5>
                <span className="fs-2 fw-medium text-primary px-5">
                  {" "}
                  $350.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagoCheckOut;
