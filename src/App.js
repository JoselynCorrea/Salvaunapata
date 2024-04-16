import './App.css';

import { BrowserRouter as Router, Route, BrowserRouter, Routes, Link }
  from "react-router-dom"
import home from "./pages/home"
import mascotas from "./pages/mascotas"
import contacto from "./pages/contacto"
import conocenos from "./pages/conocenos"
import testimonios from "./pages/testimonios"


function App() {
  return (
    <BrowserRouter>
      <body>
        <nav id="menu">
          <Link to={"/"} className="navegacion" >Inicio</Link>
          <Link to={"/mascotas"} className="navegacion">Mascotas</Link>
          <Link to={"/conocenos"} className="navegacion">Conocenos</Link>
          <Link to={"/contacto"} className="navegacion">Contacto</Link>
          <Link to={"/testimonios"} className="navegacion">Testimonios</Link>
        </nav>

        <Routes>
          <Route exact path="/" Component={home} />
          <Route exact path="/mascotas" Component={mascotas} />
          <Route exact path="/conocenos" Component={conocenos} />
          <Route exact path="/contacto" Component={contacto} />
          <Route exact path="/testimonios" Component={testimonios} />
        </Routes>
      </body>
    </BrowserRouter>

  );
}

export default App;
