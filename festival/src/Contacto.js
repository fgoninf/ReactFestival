import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from "emailjs-com";
function Contacto() {

    function sendEmail(e){
                    
    }
    return (
        <div >
            <section className="responsive5" id="contact">
                <div className="container">
                    <h2 className="display-3 text-center">Contactate con nosotros</h2>
                    <form onSubmit={sendEmail}>
                    <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input className="form-control" id="name" type="text" placeholder="Nombre Y Apellido" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input className="form-control" id="email" type="email" placeholder="Correo Electronico" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados." />
                                        <p className="help-block text-danger"></p>
                                     </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input className="form-control" id="phone" type="tel" placeholder="Numero De Contacto" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <textarea className="form-control" id="message" rows="5" placeholder="Mensaje" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div id="success"></div>
                                    <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Enviar Mensaje</button></div>
                                </div>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default Contacto
