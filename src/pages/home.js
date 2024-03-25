import React from 'react';
import principal from './../img/mascotas.png';

const home =() => (
<section>
    <h1 className="principal_title">SALVA UNA PATA</h1>

  <div className="seccion1">
    <p>Dale la bienvenida a un nuevo integrante en tu familia</p>						
  </div>
  <div className="centrarimg">
    <img  className="imagenes" src={principal}></img>   
    </div>                      
  </section>
)
export default home 