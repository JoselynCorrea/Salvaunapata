import React from 'react';
import mascota from './../img/perro.jpg';

const mascotas =() => (
    <section>
        <h1 className="principal_title">MASCOTAS</h1>
    <div className="mascotas">
	<div className="mascota">
		<img className="imgprod" src={mascota}></img>
		<div>
			<a> Pedro</a>
			<p>Este es Pedro, un encantador perro que busca su hogar para siempre. Pedro tiene unos ojos expresivos y una personalidad juguetona y cariñosa. Es muy sociable y le encanta estar cerca de las personas, así como disfrutar de largos paseos al aire libre.</p>
		</div>
	</div>	
    </div>	
    </section>
    )

export default mascotas