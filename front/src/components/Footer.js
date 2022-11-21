import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Row>ATENCION AL CLIENTE</Row>
          <Row>-</Row>
          <Row>Preguntas frecuentes</Row>
          <Row>Tabla de tallas de calzado</Row>
          <Row>Encuentra tu tienda</Row>
        </Col>
        <Col>
          <Row>SOBRE FeetWings Shop </Row>
          <Row>-</Row>
          <Row>Como Comprar?</Row>
          <Row>Informacion sobre Envio</Row>
          <Row>Terminos y Condiciones</Row>
          <Row>cambios y devoluciones</Row>
        </Col>

        <Col>
          <Row>MAS BUSCADOS </Row>
          <Row>-</Row>
          <Row>Nike</Row>
          <Row>Adidas</Row>
          <Row>New Balance</Row>
          <Row>Fila</Row>
        </Col>
        <Col>
          <Row>REDES SOCIALES</Row>
          <Row>-</Row>
          <Row>
            {" "}
            <Col>
              <FaFacebookSquare size={50} />
            </Col>
            <Col>
              <FaTwitterSquare size={50} />
            </Col>
            <Col>
              <FaInstagramSquare size={50} />
            </Col>{" "}
          </Row>
        </Col>
      </Row>
      <Row>
        <p className="text-center mt-1">
          
        </p>
      </Row>
      <Row>
        <p className="text-center mt-1">
          FeetWings Shop Store © 2022 - Todos los derechos reservados
          @QualitySoft
        </p>
      </Row>
    </Container>
  );
}

export default Footer;
