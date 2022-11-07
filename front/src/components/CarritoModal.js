import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function CarritoModal({ mostrar, handleClose }) {
  const [dataMostrar, setdataMostrar] = useState([]);
  const borrarCarrito = () => {
    localStorage.removeItem("carrito")
    window.location.reload()
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("carrito"));
    if (items) {
      setdataMostrar(items);
    }
   
  }, [mostrar]);

  let total = 0

  dataMostrar.map(item => (
    total = (Number(item.precio.slice(1,-1)) * item.cantidad) + total
  ))
  console.log(total);
  return (
    <>
      <Offcanvas show={mostrar} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras <Button onClick={()=>borrarCarrito()} variant="outline-success">Borrar</Button></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container>
          {dataMostrar.map((item) => (
            <Row>
              <Col>
                <img
                  className="card-img-top mx-auto"
                  src={item.imagen}
                  alt={item.nombre}
                ></img>
              </Col>
              <Col>{item.nombre}</Col>
              <Col>und: {item.cantidad}</Col>
              <Col>{item.precio}</Col>
            </Row>
          ))
          }
          
          <Row>
            <Col></Col>
            <Col>Total</Col>
            <Col>${total}.000</Col>
          </Row>
          <Row>
            <Col> <Link className="btn btn-info" to={`/generarventa`} onClick={handleClose}>Pagar</Link></Col>
          </Row>
        </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CarritoModal;
