import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';
function Contacto() {

    function sendEmail(e){
        emailjs.sendForm('gmail', 'template_ukh2r6n', e.target, 'user_AehHLruJFurZE84Qk85Jh')
        .then(function(response) {
           
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            );
        }, function(error) {
           console.log('FAILED...', error);
        });
        e.target.reset();
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
                                        <input className="form-control" name="name" type="text" placeholder="Nombre Y Apellido" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input className="form-control" name="email" type="email" placeholder="Correo Electronico" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados." />
                                        <p className="help-block text-danger"></p>
                                     </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input className="form-control" name="phone" type="tel" placeholder="Numero De Contacto" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados."></textarea>
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
