import React from 'react';
import correo from './../img/correo.png';
import tel from './../img/tel.png';
import fb from './../img/fb.png';
import formulario from './../solicitud.pdf';

const contacto = () => (
    <section className='centrar'>
        <h1 className="principal_title">SALVA UNA PATA</h1>
        <h2>¿Cómo puedo adoptar?</h2>


        <div className='margen'>
            <p>Para solicitar la adopción de una mascota deberas acudir a nuestro refugio, simplemente visita nuestras instalaciones durante el horario de atención.
                Aquí encontrarás un formulario de adopción que necesitarás completar.
                Este formulario nos ayudará a conocerte mejor y a garantizar que nuestra mascota y tu hogar sean una buena combinación.
                Estamos aquí para ayudarte en cada paso del proceso de adopción.
                ¡Esperamos conocerte pronto y ayudarte a encontrar a tu compañero peludo perfecto!</p>
            <a href={formulario} download="Formulario.pdf">Formulario de Adopción</a>
        </div>
        <div className='margen'>
            <h2>¿Dónde nos encuentras?</h2>
            <p>Si tienes alguna duda o necesitas más información sobre el proceso de adopción, no dudes en ponerte en contacto con nosotros.</p>
            <div id='mapa'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.713671949349!2d-103.35555222508118!3d20.681224780882594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b106a09eab63%3A0xb96c51e2dbba950f!2sUDGVirtual!5e0!3m2!1ses-419!2smx!4v1713169192998!5m2!1ses-419!2smx"
                    width="600" height="450"
                    style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />

                <ul>
                    <li class="licontacto"><img class="img" src={correo}></img><label>contacto@salvaunapata.com</label></li>
                    <li class="licontacto"><img class="img" src={tel}></img><label>+52 123 000 0000</label></li>
                    <li class="licontacto"><a href="https://www.facebook.com"><img class="img" src={fb}></img></a><label>Salvaunapata</label></li>
                </ul>
            </div>
        </div>
        <div className='margen'>
            <h2>¿Cómo puedo realizar una donación a Salva una Pata?</h2>

            <p>Puedes realizar la donación directamente en nuestro refugio o a la siguiente cuenta</p>
            <ul>
                <li>Nombre de la cuenta: Salva una Pata - Asociación de Adopción de Perros</li>
                <li>Banco: Banco Nacional de Perros</li>
                <li>Número de cuenta: 1234567890</li>
                <li>Clave interbancaria: 012345678901234567</li>
            </ul>
        </div>



    </section>
)
export default contacto