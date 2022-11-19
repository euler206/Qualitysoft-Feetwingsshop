import React, { useEffect, useState } from "react";
import { todasLasVentas } from "../utils/Ventas";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../App.css";

export const ListarVentasAdmin = () => {
  const [dataVentas, setdataVentas] = useState(false);
  useEffect(() => {
    todasLasVentas().then((result) => {
      setdataVentas(result);
    });
  }, []);

  let dineroVendido = 0;
  let unidadesVendidas = 0;

  if (dataVentas) {
    dataVentas.map((item) => (dineroVendido = item.valor + dineroVendido));
  }

  if (dataVentas) {
    dataVentas.map((item) =>
      item.detalleCompra.map(
        (item2) => (unidadesVendidas = item2.cantidad + unidadesVendidas)
      )
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card
            bg="success"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Resumen de ventas</Card.Header>
            <Card.Body>
              <Card.Title> Ventas Realizadas</Card.Title>
              <Card.Text>{dataVentas.length}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            bg="success"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Resumen de ventas</Card.Header>
            <Card.Body>
              <Card.Title>Dinero Vendido</Card.Title>
              <Card.Text>${dineroVendido}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            bg="success"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Resumen de ventas</Card.Header>
            <Card.Body>
              <Card.Title>Unidades vendidas</Card.Title>
              <Card.Text>{unidadesVendidas}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Row className="bg-info">
          <Col md="auto">#</Col>
          <Col>Cliente</Col>
          <Col>correo</Col>
          <Col>fecha</Col>
          <Col>valor de Venta</Col>
          {/*
          <Col>Detalle</Col>  //PENDIENTE
          */}
        </Row>
        {dataVentas ? (
          dataVentas.map((item, index) => (
            <Row className="border">
              <Col md="auto">{index + 1}</Col>
              <Col>
                {item.idCliente.nombres} {item.idCliente.apellidos}
              </Col>
              <Col>{item.idCliente.correo}</Col>
              <Col>{item.fecha}</Col>
              <Col>${item.valor}</Col>
              {/*
              <Col><button type="button" className="btn btn-light">Ver</button></Col>  //PENDIENTE
              */}
            </Row>
          ))
        ) : (
          <h1>Cargando ...</h1>
        )}
      </Row>
    </Container>
  );
};
