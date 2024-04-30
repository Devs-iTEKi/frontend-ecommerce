
const Questions = () => {

    return (
        <section className="p-lg-5 p-4 container-fluid">
            <h1 className="fw-bold mb-4">Preguntas frecuentes</h1>
            <div >
                <h2 className="fw-bold question text-center">¿Tienes alguna pregunta?</h2>
                <h4 className="fw-semibold text-center" >¡Estamos para apoyarte!</h4>
                <div class="accordion accordion-flush my-5" id="accordionFlushExample">

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                ¿Cómo puedo pedir un producto?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Para pedir un producto en iteki, sigue estos sencillos pasos:
                                <ul>
                                    <li>Navega por nuestra tienda en línea y encuentra el producto que deseas.</li>
                                    <li>Haz clic en el botón "Agregar al carrito" para añadir el producto a tu carrito de compras.</li>
                                    <li>Revisa los artículos en tu carrito y procede al checkout cuando estés listo para realizar el pedido.</li>
                                    <li>Completa la información requerida, como la dirección de envío y la opción de pago.</li>
                                    <li>Confirma tu pedido y realiza el pago para completar la compra.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                ¿Cuáles son los métodos de pago aceptados?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Aceptamos dos métodos de pago para mayor comodidad de nuestros clientes:
                            <ul>
                                <li>Efectivo contraentrega</li>
                                <li>Tarjetas de crédito y débito (Visa, Mastercard, American Express, etc.)</li>
                                </ul>
                                </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                ¿Hay algún costo de envío?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Ofrecemos envío gratuito en pedidos superiores a cierto monto, y el costo de envío para pedidos por debajo de ese monto varía según la ubicación y el método de envío seleccionado. Los detalles sobre los costos de envío se mostrarán durante el proceso de checkout antes de confirmar tu pedido.</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                ¿Cuánto tiempo tardará en llegar mi pedido?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">El tiempo de entrega estimado dependerá de varios factores, como la ubicación de envío, el método de envío seleccionado y la disponibilidad del producto. Generalmente, los pedidos se procesan y envían dentro de 1-3 días hábiles. Una vez enviado, el tiempo de entrega puede variar de 2 a 10 días hábiles, dependiendo del destino y el método de envío.</div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                ¿Cuál es la política de devolución?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">En iteki, queremos asegurarnos de que estés completamente satisfecho con tu compra. Por lo tanto, ofrecemos una política de devolución flexible:
                            <ul>
                                <li>Si no estás satisfecho con tu compra por cualquier motivo, puedes devolver el producto dentro de los 30 días posteriores a la entrega para obtener un reembolso completo o un cambio.</li>
                                <li>El producto devuelto debe estar en su estado original, sin usar y en su embalaje original.</li>
                                <li>Los gastos de envío de la devolución corren a cargo del cliente, a menos que el producto sea defectuoso o haya sido enviado incorrectamente por nuestra parte.</li>
                                <li>Para iniciar el proceso de devolución, contáctanos y te proporcionaremos instrucciones detalladas sobre cómo proceder.</li>
                                </ul>
                                </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    );
}
export default Questions;