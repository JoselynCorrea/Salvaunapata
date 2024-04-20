import React, { useEffect, useState } from 'react';

var patas;

function Mascotas() {

  const [filtro, setFiltro] = useState(null);

  useEffect(() => {
    Setup();
  }, [])


  const Setup = () => {
    fetch('./mascotas.json')
      .then(resp => resp.json())
      .then(json => {

        patas = json;
        //console.log(patas);
        setFiltro(patas);
      })
  }

  const handleBuscador = (e) => {
    const cadena = e.target.value.toLowerCase();
    //console.log(cadena);
    let tmpArray = [];
    const limite = patas.length;

    for (let index = 0; index < limite; index++) {
      const descripcion = patas[index].descripcion.toLowerCase();
      const patt = new RegExp(cadena);
      const res = patt.test(descripcion);

      if (res) {
        tmpArray.push(patas[index])
      }


    }
    setFiltro(tmpArray);
  }
  return (
    <section className="fuente">
      <h1 className="principal_title">MASCOTAS</h1>
      <input onChange={handleBuscador} className="navegacion" type="text" placeholder="Búsqueda" />
     

      <div>
        <div className='mascotas' >
          {
            filtro &&
            filtro.map((item, i) => (
              <div className="mascota" key={i}>
                <img className="imgprod" src={(`./../img/${item.url}`)}/>
                <div className='negritas'>{item.nombre}</div>
                <div>{item.edad} año(s)</div>
                <div>{item.descripcion}</div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Mascotas