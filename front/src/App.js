import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Inicio from "./pages/Inicio";
import NavbarComponent from "./components/NavbarComponent";
import { Footer } from "./components/Footer";
import { Novedades } from "./components/Novedades";

function App() {
  return (
    <Router>
    <NavbarComponent />
    <Container className="">
      <Container className="fondo border py-4 px-4 shadow-lg p-3 mb-5 bg-white rounded">
        <Routes>
          <Route exact path="/" element={<Inicio />} />       
                 
        </Routes>
      </Container>
    </Container>
    <Footer/>
    <Novedades/>
  </Router>
  );
}

export default App;
