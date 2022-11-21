import "./App.css";
import "alertifyjs/build/css/alertify.css"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
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

import ListarProductos from "./pages/ListarProductos";
import { Catalogo } from "./pages/Catalogo";

import Login from "./pages/login";
import Registrar from "./pages/registrar";
import Recuperar from "./pages/recuperar";
import { ProductDetails } from "./components/ProductDetails";
import GenerarVenta from "./pages/GenerarVenta";
import  UserLogued  from "./components/UserLogued";


function App() {
  const [dataLogued, setdataLogued] = useState(JSON.parse(localStorage.getItem("userInfo")) || "Cliente" )
  const [isLogued, setisLogued] = useState(dataLogued.correo ? true : false)
  return (
    <Router>
    <NavbarComponent Rol={isLogued ? dataLogued.Rol : "Cliente"} />
    <Container className="">
      <Container className="fondo border py-4 px-4 shadow-lg p-3 mb-5 bg-white rounded">
        <Routes>

          <Route exact path="/" element={<Inicio />} /> 
          <Route exact path="/login" element={isLogued ? <UserLogued dataUser={dataLogued} /> : <Login />} /> 
          <Route exact path="/recuperar" element={<Recuperar />} />
          <Route exact path="/registrar" element={<Registrar />} /> 
          <Route exact path="/Hombre" element={<Hombre />} /> 
          <Route exact path="/Mujer" element={<Mujer />} />
          <Route exact path="/Kids" element={<Kids />} />
          <Route exact path="/Catalogo" element={<Catalogo />} />
          <Route exact path="/Producto" element={<ProductDetails />} />
          {/*-------------OPCIONES DE ADMIN-----------------*/}
          <Route exact path="/crearproducto" element={<CrearProducto /> } />
          <Route exact path="/listarventas" element = {<ListarVentas />} /> 
          <Route exact path="/listarproductos" element = {<ListarProductos />} /> 
          <Route exact path="/generarventa" element = {<GenerarVenta />} /> 
            {/*-------------FIN OPCIONES DE ADMIN-----------------*/}     
        </Routes>
      </Container>
    </Container>
    <Footer/>
  </Router>
  );
}

export default App;
