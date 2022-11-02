import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserLogued({ dataUser }) {

  const cerrarSesion = () => {
    localStorage.removeItem("userInfo")
  }

  return (
    <Form onSubmit={cerrarSesion}>
    <Container>
      <Row>
        <Col>-</Col>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" />
            <Card.Body>
              <Card.Title>{dataUser.user}</Card.Title>
              <Card.Text>
                Esta es una cuenta de Tipo:  <h3>{dataUser.Rol}</h3>
              </Card.Text>
              <Button type="submit" variant="primary">Cerrar sesion</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>-</Col>
      </Row>
    </Container>
    </Form>
  );
}

export default UserLogued;
