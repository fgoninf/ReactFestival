import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./bienvenido.css"


function Bienvenido() {
    return (
        <div className="Bienvenido">
            <div className="responsive">
                <blockquote class="blockquote">
                    <p class="display-4">Bienvenido a la Fiesta Cultural de Buin</p>
                    
                    <a class="btn btn-success" href="/" role="button" id="btn_cono">Conocenos</a>
                </blockquote>
            </div>
        </div>
    )
}

export default Bienvenido
