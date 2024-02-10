import principal from './img/mascotas.png';
import './App.css';

function App() {
  return (
    <body className="fuente">
    <header>
      <nav id="menu">
        <a className="navegacion" >Inicio</a>
        <a className="navegacion" >Mascotas</a>
        <a className="navegacion" >Conocenos</a>
        <input className="navegacion" type="text" placeholder="Búsqueda"/>
      </nav>
    </header>
    <div>
      <h1 className="principal_title">SALVA UNA PATA</h1>
    </div>
    <div className="seccion1">
      <p>Dale la bienvenida a un nuevo integrante en tu familia</p>						
    </div>
    <div className="centrarimg">
      <img  className="imagenes" src={principal}></img>                         
    </div>
    </body>
  );
}

export default App;
