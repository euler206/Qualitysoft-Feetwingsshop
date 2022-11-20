import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { ventaPorId } from "../utils/Ventas";


function DetalleVenta({ dataVenta, handleClose }) {
  const [dataCompras, setdataCompras] = useState([]);
  console.log("dataventa = ", dataVenta._id);
  
  ventaPorId(dataVenta._id)
  /*
  useEffect(() => {
    ventaPorId(dataVenta._id).then(result => {
    setdataCompras(result)
    
    })
  }, [dataVenta])
  console.log("dataventa = ", dataVenta);
  
  let total = 0

  dataCompras?.map((item) => (
    total = (item.precio * item.cantidad) + total
  ))
  console.log(total);
  
  return (
    <>
      <Offcanvas show={dataVenta} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Detalle de la Venta</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container>
        <Col>
          <Row className="pedidoTitulo">Mis pedidos: {dataCompras ? dataCompras.length : 0}</Row>
          <Row><hr /></Row>        
          
            {dataCompras ? 
            dataCompras.map(item => (
              <Row  className="pedidoPrincipal">
              <Row  className="pedidoCabecera">
              <Col>
              <Row>Pedido #{item._id}</Row>
              <Row className="pedidoTextoSecundario">Realizado el {item.fecha}</Row>
            </Col>
            <Col>
              <Row>Cantidad: {item.detalleCompra.length} productos </Row>
              <Row></Row>
            </Col>
            <Col>
              <Row>Total del Pedido: ${item.valor}</Row>
              <Row></Row>
            </Col>
            </Row>
            {
              item.detalleCompra.map(r => (
                <Row>
              <Col md="auto"><Link to={`/producto?idProducto=${r.idProducto._id}`}><img src={r.idProducto.imagen} alt={r.idProducto.imagen} width="50" /> </Link> </Col>
              <Col className="pedidoTextoSecundario"><Link to={`/producto?idProducto=${r.idProducto._id}`}>{r.idProducto.nombre}</Link></Col>
              <Col className="pedidoTextoSecundario">Unidades: {r.cantidad}</Col>
              <Col className="pedidoTextoSecundario">${r.idProducto.precio}</Col>
              
            </Row>
              ))
            }
            
            </Row>
            
            )) 
            : ""}
        </Col>
          
        </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
  */
}

export default DetalleVenta;
