import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Inicio from "./pages/Inicio";
import ListarVentas from "./pages/ventas";
import NavbarComponent from "./components/NavbarComponent";
import { Hombre } from "./components/Hombre";
import { Mujer } from "./components/Mujer";
import { Kids } from "./components/Kids";
import  Footer  from "./components/Footer";
import CrearProducto from "./pages/CrearProducto"

function App() {
  return (
    <Router>
    <NavbarComponent Rol="Admin" />
    <Container className="">
      <Container className="fondo border py-4 px-4 shadow-lg p-3 mb-5 bg-white rounded">
        <Routes>

          <Route exact path="/" element={<Inicio />} /> 
          <Route exact path="/Hombre" element={<Hombre />} /> 
          <Route exact path="/Mujer" element={<Mujer />} />
          <Route exact path="/Kids" element={<Kids />} />
          {/*-------------OPCIONES DE ADMIN-----------------*/}
          <Route exact path="/crearproducto" element={<CrearProducto /> } />
          <Route exact path="/listarventas" element = {<ListarVentas />} /> 
            {/*-------------FIN OPCIONES DE ADMIN-----------------*/}     
        </Routes>
      </Container>
    </Container>
    <Footer/>
  </Router>
  );
}

export default App;
