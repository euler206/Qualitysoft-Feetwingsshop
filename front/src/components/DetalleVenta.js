import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { ventaPorId } from "../utils/Ventas";


function DetalleVenta({ dataVenta  , handleClose } ) {
  const [dataCompras, setdataCompras] = useState([]);
  console.log("estamos en DetalleVenta (dataventa)  = ", dataVenta._id);
  console.log("Variable handleClose  = ", handleClose);
  
  useEffect(() => {
    console.log("entre a UseEfect");
    console.log("dataVenta=", dataVenta);
    if (!(dataVenta._id === undefined)) {  
      ventaPorId(dataVenta._id).then((result) => {
        console.log("result.detalleCompra = ", result.detalleCompra);
        setdataCompras(result.detalleCompra);
      })
    }
    else console.log("No entre a ventaPorId");
  
  }, dataVenta._id);
    
  
  let total = 0
  console.log("datacompras = ", dataCompras);

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
  
}

export default DetalleVenta;
