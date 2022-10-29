import { Button, Container, Form, Row, Col } from "react-bootstrap";
import React from "react";

function CrearProducto() {
  return (
    <Container>
        <Row>
            <Col><h3>Ingresar productos</h3></Col>
            <Col>B</Col>
        </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre: </Form.Label>
              <Form.Control type="text" placeholder="Nombre del Producto" />             
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripcion: </Form.Label>
              <Form.Control type="text" placeholder="Descripcion" />             
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Precio: </Form.Label>
              <Form.Control type="number" placeholder="$" />             
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Stock: </Form.Label>
              <Form.Control type="number" placeholder="cantidad" />             
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Imagen: </Form.Label>
              <Form.Control type="file"  />             
            </Form.Group>

             <Button variant="primary" type="submit">
              ingresar
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CrearProducto;
