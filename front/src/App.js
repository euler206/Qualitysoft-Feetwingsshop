import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Inicio from "./pages/Inicio";
import ListarVentas from "./pages/ventas";
import NavbarComponent from "./components/NavbarComponent";
import { Footer } from "./components/Footer";
import { Hombre } from "./components/Hombre";
import { Mujer } from "./components/Mujer";
import { Kids } from "./components/Kids";
import Hombre from "./components/Hombre";
import  Footer  from "./components/Footer";
import CrearProducto from "./pages/CrearProducto"

function App() {
  return (
    <Router>
    <NavbarComponent />
    <Container className="">
      <Container className="fondo border py-4 px-4 shadow-lg p-3 mb-5 bg-white rounded">
        <Routes>

          <Route exact path="/" element={<Inicio />} /> 
          <Route exact path="/Hombre" element={<Hombre />} /> 
          <Route exact path="/Mujer" element={<Mujer />} />
          <Route exact path="/Kids" element={<Kids />} />
                 
          <Route exact path="/crearproducto" element={<CrearProducto /> } />
          <Route exact path="/Hombre" element={<Hombre />} />    
          <Route exact path="/listarventas" element = {<ListarVentas />} /> 
                 
        </Routes>
      </Container>
    </Container>
    <Footer/>
  </Router>
  );
}

export default App;
