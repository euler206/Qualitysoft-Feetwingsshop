import React, {  useState } from "react";
import { Button, Container, Row, Table, Col } from "react-bootstrap";
import { FaCcVisa,FaCcMastercard,FaCcDiscover } from 'react-icons/fa';


function GenerarVenta() {
  const [data, setdata] = useState(JSON.parse(localStorage.getItem("carrito")));
  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {data ? data.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>{item.precio}</td>
            </tr>
          )):<h1>Carrito de Compras Vacio</h1>}
        </tbody>
      </Table>
      <Row>
        <Col>
          <FaCcVisa size={100} />{" "}
          <FaCcMastercard size={100} />{" "}
          <FaCcDiscover size={100} />{" "}
          
        </Col>
        <Col>
          <Button>Proceder Con el Pago</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default GenerarVenta;
