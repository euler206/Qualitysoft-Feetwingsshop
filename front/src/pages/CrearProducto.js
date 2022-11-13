import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { crearProductoEnCatalogo } from "../utils/Catalogo";
import alertify from "alertifyjs" 




function CrearProducto() {
  const [marca, setmarca] = useState("");
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [precio, setprecio] = useState(0);
  const [cantidad, setcantidad] = useState(0);
  const [imagen, setimagen] = useState("");
  const [genero, setgenero] = useState("Mujer");

  const handleSubmit = async (e) => {
    e.preventDefault();    
    const data = await {
      nombre,
      genero,
      marca,
      precio,
      cantidad,
      reviews:[],
      imagen:`./images/${imagen.split(/(\\|\/)/g).pop()}`
    }
    crearProductoEnCatalogo(data).then(result => {
      if (result.Error) {
        alertify.warning(result.Message); 
      }else{
        alertify.success(result.Message); 
        setnombre("")
        setmarca("")
        setdescripcion("")
      }
    })


  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Ingresar productos</h3>
        </Col>
        <Col>B</Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Marca: </Form.Label>
              <Form.Control 
                required
                type="text"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setmarca(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre: </Form.Label>
              <Form.Control
              required
                type="text"
                placeholder="Nombre del Producto"
                value={nombre}
                onChange={(e) => setnombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripcion: </Form.Label>
              <Form.Control
              required
                type="text"
                placeholder="Descripcion"
                value={descripcion}
                onChange={(e) => setdescripcion(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Precio: </Form.Label>
              <Form.Control
              required
                type="number"
                placeholder="$"
                value={precio}
                onChange={(e) => setprecio(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Stock: </Form.Label>
              <Form.Control
              required
                type="number"
                placeholder="cantidad"
                value={cantidad}
                onChange={(e) => setcantidad(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Imagen: </Form.Label>
              <Form.Control
              required
                type="file"
                onChange={(e) =>setimagen(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Genero: </Form.Label>
              <Form.Select
                value={genero}
                onChange={(e) => setgenero(e.target.value)}
              >
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
              </Form.Select>
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
