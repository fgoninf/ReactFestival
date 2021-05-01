import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacto() {

    const{register,handleSubmit}=useForm();
        
    async function onSubmitForm(values){
        let config={
            method: 'post',
            url: `${process.env.PUBLIC_URL}/api/contact`,
            headers:{
                'Content-Type': 'application/json'
            },
            data: values,
        };
        try {
            const response = await axios(config);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        
    }
    
    return (
        <div >
            <section className="responsive5" id="contact">
                <div className="container">
                    <h2 className="display-3 text-center">Contactate con nosotros</h2>
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input className="form-control" {...register("name")} type="text" placeholder="Nombre Y Apellido" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input className="form-control" {...register("email")} type="email" placeholder="Correo Electronico" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados." />
                                        <p className="help-block text-danger"></p>
                                     </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input className="form-control" {...register("phone")} type="tel" placeholder="Numero De Contacto" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br></br>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <textarea className="form-control" {...register("message")} rows="5" placeholder="Mensaje" required="required" data-validation-required-message="Por favor Ingrese Datos Solicitados."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div id="success"></div>
                                    <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Enviar Mensaje</button></div>
                                </div>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default Contacto
