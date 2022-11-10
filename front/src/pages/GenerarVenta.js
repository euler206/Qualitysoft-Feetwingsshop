import React, {  useEffect, useState } from "react";
import { Button, Container, Row, Table, Col } from "react-bootstrap";
import { FaCcVisa,FaCcMastercard,FaCcDiscover } from 'react-icons/fa';
import { generarVenta } from "../utils/Ventas";


function GenerarVenta() {
  const [data, setdata] = useState(JSON.parse(localStorage.getItem("carrito")));
  const [dataCliente, setdataCliente] = useState(JSON.parse(localStorage.getItem("userInfo")));

 

  let total = 0
  let unidades = 0
  let detalleCompra = []
  
  data?.map((item) => (
    total = (item.precio * item.cantidad) + total    
  ))
  data?.map((item) => (
    unidades = (item.cantidad) + unidades    
  ))
  data?.map((item) => (
    detalleCompra.push({
      cantidad:item.cantidad,
      idProducto:item.idProducto
    })    
  ))
  
  
  const objetoGenerarVenta = async() => {
    const newVenta =await {
      fecha:"09/11/2022",
      idCliente:dataCliente.id || 1,
      comfirmado:true,
      detalleCompra:detalleCompra,
      valor:total
    }
    await generarVenta(newVenta).then(data => {
      console.log(data);
    })
  }

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
          <tr>
            <td colSpan={2}>TOTAL</td>
            <td>#{unidades}</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </Table>
      <Row>
        <Col>
          <FaCcVisa size={100} />{" "}
          <FaCcMastercard size={100} />{" "}
          <FaCcDiscover size={100} />{" "}
          
        </Col>
        <Col>
          <Button onClick={() => objetoGenerarVenta()} >Proceder Con el Pago</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default GenerarVenta;
