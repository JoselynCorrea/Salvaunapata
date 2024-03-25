import './App.css';

import { BrowserRouter as Router, Route, BrowserRouter, Routes, Link}
from "react-router-dom"
import home from "./pages/home"
import mascotas from "./pages/mascotas"
import contacto from "./pages/contacto"

function App() {
  return (
    <BrowserRouter>
    <body className="fuente">
      <nav id="menu">
        <Link to={"/"} className="navegacion" >Inicio</Link>
        <Link to={"/mascotas"} className="navegacion">Mascotas</Link>
        <Link to={"/contacto"} className="navegacion">Conocenos</Link>
        <input className="navegacion" type="text" placeholder="Búsqueda"/>
      </nav>
    
        <Routes>
          <Route exact path="/" Component={home}/>
          <Route exact path="/mascotas" Component={mascotas}/>
          <Route exact path="/contacto" Component={contacto}/>
        </Routes>     
        </body>  
    </BrowserRouter>
    
  );
}

export default App;
