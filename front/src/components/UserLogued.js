import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ventasPorUsuario } from "../utils/Ventas";
import { Link } from "react-router-dom";
import admin from "../recursos/images/admin.ico";
import cliente from "../recursos/images/user.jpeg";


function UserLogued({ dataUser }) {
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  const [dataCompras, setdataCompras] = useState(false)
useEffect(() => {
  ventasPorUsuario(dataUser._id).then(result => {
    setdataCompras(result)
    console.log(result)
  })
}, [dataUser._id])

  

  const cerrarSesion = () => {
    localStorage.removeItem("userInfo")
  }

  return (
    <Form onSubmit={cerrarSesion}>
    <Container>
      <Row>
        <Col md="auto"><Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src= {dataUser.Rol === "Admin" ? admin : dataUser.Rol === "Cliente" ? cliente : "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="} width="10" />
            <Card.Body>
              
              <Button type="submit" variant="primary">Cerrar sesion</Button>
            </Card.Body>
          </Card></Col>
        <Col>
          <Row className="pedidoTitulo">Informacion de la Cuenta</Row>         
          <Row><hr /></Row>         
          <Row>{dataUser.nombres} {dataUser.apellidos}</Row>
          <Row> {dataUser.correo}</Row>
          <Row> {dataUser.Rol}</Row>         
          <Row><br></br></Row>
          <Row><br></br></Row>         
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
              <Row>Total del Pedido: {formatterPeso.format(item.valor)}</Row>
              <Row></Row>
            </Col>
            </Row>
            {
              item.detalleCompra.map(r => (
                <Row>
              <Col md="auto"><Link to={`/producto?idProducto=${r.idProducto._id}`}><img src={r.idProducto.imagen} alt={r.idProducto.imagen} width="50" /> </Link> </Col>
              <Col className="pedidoTextoSecundario"><Link to={`/producto?idProducto=${r.idProducto._id}`}>{r.idProducto.nombre}</Link></Col>
              <Col className="pedidoTextoSecundario">Unidades: {r.cantidad}</Col>
              <Col className="pedidoTextoSecundario">{formatterPeso.format(r.idProducto.precio)}</Col>
              
            </Row>
              ))
            }
            
            </Row>
            
            )) 
            : ""}
        </Col>
      </Row>
      <Row>
        <Col>-</Col>
        <Col>
          
        </Col>
        <Col>-</Col>
      </Row>
    </Container>
    </Form>
  );
}

export default UserLogued;
