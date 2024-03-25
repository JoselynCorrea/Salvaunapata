import React from 'react';
import correo from './../img/correo.png';
import tel from './../img/tel.png';
import fb from './../img/fb.png';
import formulario from './../solicitud.pdf';

const contacto =() => (
    <section>
        <h1 className="principal_title">¿Dónde nos encuentras?</h1>
    
    
    <div>
        <p>Para solicitar la adopción de una mascota deberas acudir a nuestro refugio, simplemente visita nuestras instalaciones durante el horario de atención.
             Aquí encontrarás un formulario de adopción que necesitarás completar. 
             Este formulario nos ayudará a conocerte mejor y a garantizar que nuestra mascota y tu hogar sean una buena combinación.
             Estamos aquí para ayudarte en cada paso del proceso de adopción.
              ¡Esperamos conocerte pronto y ayudarte a encontrar a tu compañero peludo perfecto!</p>
        <a href={formulario} download="Formulario.pdf">Formulario de Adopción</a>
    </div>

    <div>
        <p>Si tienes alguna duda o necesitas más información sobre el proceso de adopción, no dudes en ponerte en contacto con nosotros.</p>
        <ul>
        <li class="licontacto"><img class="img" src={correo}></img><label>contacto@salvaunapata.com</label></li>
        <li class="licontacto"><img class="img" src={tel}></img><label>+52 123 000 0000</label></li>
        <li class="licontacto"><img class="img" src={fb}></img><label>Salvaunapata</label></li>
	    </ul> 
    </div>

    </section>
    )
export default contacto