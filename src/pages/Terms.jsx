
import { Link } from 'react-router-dom';

const Terms = () => {

    return (
        <section className="termsAndConditions p-lg-5 p-4 container-fluid">
            <h1 className="fw-bold mb-4">Términos y condiciones</h1>

            <div className="identificacion">
                <h4 className="fw-semibold mb-3">1. Identificación del proveedor</h4>
                <p className="m-0">ITEKI  S.A DE C.V.NIT: 0511-060616-101-6</p>
                <p className="m-0">Dirección: Edificio Avante, Piso #8, Bulevar Luis Poma, Antiguo Cuscatlán, La Libertad.</p>
                <p className="m-0">Teléfono: (503)2527-8000</p>
                <p className="mt-0">Correo electrónico: iteki_servicio@gmail.com</p>
            </div>
            <div className="mediosDeContacto">
                <h4 className="fw-semibold mb-3 mt-4">2. Medios de contactos</h4>
                <p className="mt-0">Comunicate con nosotros por medio de nuestro numero de contacto: (503)2527-8000 o por medio de nuestro correo electrónico:  contacto@iteki.com</p>
            </div>
            <div className="mediosDePago">
                <h4 className="fw-semibold mb-3 mt-4">3. Medios de pagos</h4>
                <p className="mt-0">En ITEKI  ponemos a tu disposición diferentes formas de pagos: Tarjetas de crédito/débito (Visa y Mastercard), transferencias bancarias.</p>
            </div>
            <div className="garantia">
                <h4 className="fw-semibold mb-3 mt-4">4. Garantía RMA</h4>
                <p className="mt-0">Después de recibir su pedido, si se identifica que el producto está dañado o no funciona de fábrica y aún se encuentra en el período de garantía; deberá seguir los siguientes pasos:</p>
                <ol>
                    <li>Contactar a nuestros agentes por medio del canal de comunicación en donde el cliente realizó la compra.</li>
                    <li>Al comunicarse con el agente, deberá adjuntar fotografías o video del producto defectuoso y del empaque en el que venía el artículo; además la copia del comprobante de compra y hoja de series (en caso de que aplique).</li>
                    <li>El agente le brindará un número de gestión RMA y le contactará para brindarle la fecha de visita a su domicilio.  </li>
                    <li>Preparar el producto defectuoso en su empaque original; además, incluir en el empaque, todos los accesorios y manuales. Adjuntar el número de RMA que se le asigno.</li>
                    <li> Al momento del retiro en el domicilio del cliente; deberá brindarle al transportista, el producto y el RMA. Recordar que los costos de envío deberán ser asumidos por el cliente</li>
                </ol>
            </div>
            <div className="derechoDeRetracto">
                <h4 className="fw-semibold mb-3 mt-4">5. Derecho de retracto</h4>
                <p>Para solicitar la reversión de su compra o cambio de producto, contáctenos al correo iteki_servicio@gmail.com.</p>
                <p>Usted puede aplicar este derecho, siempre y cuando no se haya empezado a hacer uso del producto, el cual deberá ser entregado por parte del cliente en las oficinas: Edificio Avante, Piso #8, Bulevar Luis Poma, Antiguo Cuscatlán, La Libertad.</p>
                <p>En el  correo, indíquenos su nombre, el producto adquirido y día en que recibió su producto. A continuación, háganos saber el motivo de su solicitud de ejercer el derecho de retracto.</p>
                <p>Usted puede hacer solicitar este derecho bajo las siguientes condiciones:</p>
                <ul>
                    <li>Su compra fue realizada en nuestro sitio web https://iteki.com</li>
                    <li>Su solicitud fue realizada en los primeros 8 días transcurridos, después de recibido su producto.</li>
                    <li>Presentar el ticket o factura original de compra, en el caso de haberlo extraviado, el cliente deberá de compartirnos su nombre completo, fecha de compra, método de pago y lugar de compra. </li>
                    <li>El producto no tiene que haber sido usado y debe de entregarse en buenas condiciones (sin daños visibles), con sus elementos originales del embalaje (etiquetas, sellos, instructivos, documentos, certificados de garantía, cajas, elementos de protección, códigos de licencias por software sin raspar,  códigos de licencias por software sin activar).</li>
                    <li>El embalaje (la caja) del producto debe tener los sellos adhesivos sin alterar (no cortados, removidos o despegados).</li>
                </ul>
                <p>El producto deberá ser revisado por nuestros técnicos para validar la integridad y buen estado del artículo; para proceder con la solicitud. El reintegro del monto del producto se realizará por el mismo medio de pago utilizado para la compra, este será procesado por la institución correspondiente. Si el medio de pago fue por tarjeta de débito o crédito; se le brindará el formulario de la institución financiera correspondiente a través del correo admon@iteki.com, para que el cliente pueda gestionar su reintegro. El tiempo de acreditación del reintegro depende de la institución financiera del medio de pago con el que se realizó la compra. Si ha transcurrido un mes y no se ha efectuado la acreditación del monto, el Cliente deberá comunicarse con la institución del medio de pago y consultar el estado del proceso de devolución.</p>
            </div>
            <div className="reversionDePagos">
                <h4 className="fw-semibold mb-3 mt-4">6. Reversión de pagos</h4>
                <p>Basado en la Ley de Protección al Consumidor (Art. 13-D) podrías solicitar la reversión de pagos/ devolución por compras de nuestra webstore bajo las siguientes condiciones:</p>
                <ul>
                    <li>Ejerza su derecho de retracto;</li>
                    <li>El producto adquirido no haya sido recibido.</li>
                    <li>El producto recibido no corresponda con lo solicitado. </li>
                    <li>El producto posea un defecto de fabrica (consultar nuestra Garantía RMA).</li>
                    <li>Existan errores en el cobro de las transacciones por fallas en los sistemas de pago de terceros.</li>
                </ul>
                <p>Si el medio de pago fue por tarjeta de débito o crédito; se le brindará el formulario de la institución financiera correspondiente a través del correo admon@iteki.com, para que el cliente pueda gestionar su reintegro. El tiempo de acreditación del reintegro depende de la institución financiera del medio de pago con el que se realizó la compra. Si ha transcurrido un mes y no se ha efectuado la acreditación del monto, el Cliente deberá comunicarse con la institución del medio de pago y consultar el estado del proceso de devolución.</p>
            </div>
            <div className="deliveryService">
                <h4 className="fw-semibold mb-3 mt-4">7. Servicio de envío a domicilio</h4>
                <p>Iteki cuenta con servicio a domicilio en todo el país, sin embargo estamos sujetos a cobertura de nuestro carrier que se encarga de éste servicio.</p>
                <p>En la cual se tomará la información que el usuario ha registrado en nuestro formulario para entregas a domicilio, para programar la entrega a través de nuestro carrier. En caso de existir una discrepancia en la dirección, información complementaria o falta de cobertura, un agente de atención al cliente se pondrá en contacto para solventar dicha situación.</p>
                <h5>Costo de envío</h5>
                <p>El envío a domicilio incluye un cargo adicional, el cual se verá reflejado en el detalle de la orden “Mi carretilla” según el departamento o municipio seleccionado.</p>
                <h5>Tiempo de entrega</h5>
                <p>Los envíos a domicilio en las Zonas Metropolitanas de San Salvador y Santa Tecla tienen un tiempo estimado de entrega de 24 horas hábiles; para los envíos al interior del país en las cabeceras departamentales el tiempo estimado de entrega es de 48 a 72 horas hábiles y para algunos municipios hasta 5 días hábiles.</p>
            </div>
            <div className='warnings'>
                <h4 className="fw-semibold mb-3 mt-4">8. Advertencias</h4>
                <p>Aplica para todos nuestro productos.</p>
                <p>Puede que pases desapercibido algunos detalles de uso de nuestros productos; pero nosotros nos preocupamos por el bienestar tuyo, adultos mayores, niños y mascotas. Es por eso que te recordamos que algunos productos y accesorios, pueden contener piezas pequeñas que pueden suponer un peligro de asfixia; por tanto, debes mantenerlos fuera del alcance de tus seres queridos.</p>
                <p>Te recomendamos, leer detenidamente la etiqueta o instructivos del producto o accesorio para su utilización, recomendaciones de uso y contraindicaciones. Puedes realizar consultas sobre cualquiera de nuestros productos a nuestros canales ya antes provistos.</p>
            </div>
            <div className='securityPolitics'>
                <h4 className="fw-semibold mb-3 mt-4">9. Política de seguridad</h4>
                <p>Consulta nuestra  <Link to={"/politicas"}> política de seguridad.
                </Link></p> 
            </div>
        </section>

    );
}
export default Terms;