import React from 'react';
import Data from './../mascotas.json';
const mascotas =() => (
    <section>
        <h1 className="principal_title">MASCOTAS</h1>
    <div className="mascotas">
	<div className="mascota">
	{ 
        Data.map(post => (
            <div key={post.id}>
                <input value={post.especie} hidden name='especie'></input>
                <img className='imgprod' src={(`/img/${post.url}`)}/>
                <h2>{post.nombre}</h2>
                <p>{post.edad} año(s)</p>
                <p>{post.descripcion}</p>
                <hr />
                </div>
        ))
  }
	</div>	
    </div>	
    </section>
    )

export default mascotas