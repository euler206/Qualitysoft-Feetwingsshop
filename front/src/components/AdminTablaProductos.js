import React, { useEffect, useState } from "react";
import { Container, Table, Figure, Button, Modal } from "react-bootstrap/";
//import productos from "../data/productos.json";
import Dropdown from "react-bootstrap/Dropdown";
import { actualizarProducto, eliminarPorId, TraerTodos } from "../utils/Catalogo";
import alertify from "alertifyjs" 

function AdminTablaProductos() {
  const [productos, setproductos] = useState(false);
  const [data, setData] = useState(productos);
  const [listadoMarcas, setlistadoMarcas] = useState(undefined);
  const [listadoGeneros, setlistadoGeneros] = useState(undefined);
  const [filtro, setfiltro] = useState("- Todas");
  const [filtroGenero, setfiltroGenero] = useState("- Todos");
  const [_id, set_id] = useState("");
  const [marca, setmarca] = useState("");
  const [nombre, setnombre] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [precio, setprecio] = useState(0);
  const [cantidad, setcantidad] = useState(0);
  const [imagen, setimagen] = useState("");
  const [genero, setgenero] = useState("");
  const [reviews, setreviews] = useState("");
  const [handleCambios, sethandleCambios] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const editar = (item) => {
    set_id(item._id)
    setmarca(item.marca)
    setnombre(item.nombre)
    setdescripcion(item.descripcion)
    setprecio(item.precio)
    setcantidad(item.cantidad)
    setimagen(item.imagen)
    setgenero(item.genero)
    setreviews(item.reviews)
    setShow(true)
  };

const actualizar = async () => {
  const newData = await {
    _id,
    nombre,
    genero,
    marca,
    precio,
    imagen,
    cantidad,
    reviews
  }

console.log(newData);
await actualizarProducto(_id,newData).then(result => {
  if (result.Error) {
    alertify.error(result.Message || result); 
  }else{
    alertify.success(result.Message); 
    sethandleCambios(!handleCambios)
    
  }
})
  
}

const eliminarProducto = async (id) => {
  await eliminarPorId(id).then(result => {
    if(result.Error){
      alertify.error(result.Message || result); 
    }else{
      alertify.success(result.Message); 
      sethandleCambios(!handleCambios)
    }
  })
}
  useEffect(() => {
    const T = async () => {
      await TraerTodos().then(async (d) => {
        await setData(d);
        await setproductos(d);
      });

      /*
      const unique = await [...new Set(data.map(item => item.marca))]
      const unique2 = await [...new Set(data.map(item => item.genero))]
      await setlistadoMarcas(unique)
      await setlistadoGeneros(unique2)
        */
    };
    T();
  }, [handleCambios]);

  return (
    <Container>
      <h1>Lista de Productos</h1>
      {productos ? (
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Marca {filtro}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setData(productos);
                        setfiltro(` - Todos`);
                      }}
                    >
                      Todos
                    </Dropdown.Item>
                    {listadoMarcas !== undefined
                      ? listadoMarcas.map((item) => (
                          <Dropdown.Item
                            onClick={() =>
                              setData(
                                productos.filter(
                                  (item2) => item2.marca === item
                                ),
                                setfiltro(` - ${item}`)
                              )
                            }
                          >
                            {item}
                          </Dropdown.Item>
                        ))
                      : ""}
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th>Nombre</th>
              <th>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Genero {filtroGenero}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => {
                        setData(productos);
                        setfiltroGenero(` - Todos`);
                      }}
                    >
                      Todos
                    </Dropdown.Item>
                    {listadoGeneros !== undefined
                      ? listadoGeneros.map((item) => (
                          <Dropdown.Item
                            onClick={() =>
                              setData(
                                productos.filter(
                                  (item2) => item2.genero === item
                                ),
                                setfiltroGenero(` - ${item}`)
                              )
                            }
                          >
                            {item}
                          </Dropdown.Item>
                        ))
                      : ""}
                  </Dropdown.Menu>
                </Dropdown>
              </th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.marca}</td>
                <td>{item.nombre}</td>
                <td>{item.genero}</td>
                <td>{item.precio}</td>
                <td>{item.cantidad}</td>
                <td>
                  <Figure>
                    <Figure.Image width={100} src={item.imagen} />
                  </Figure>
                </td>
                <td>
                  <Button variant="primary" size="sm" onClick={() =>  {
                    editar(item)
                  }}>
                    editar
                  </Button>
                  <Button variant="warning" size="sm" onClick={() =>  {
                    eliminarProducto(item._id)
                  }} >
                    Eliminar
                  </Button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>Cargando Proeductos ...</h1>
      )}
       <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Editar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input type="text" disabled value={_id} />
                    </Modal.Body>
                    <Modal.Body>
                      <input type="text" value={marca} onChange={(e) =>setmarca(e.target.value)} />
                    </Modal.Body>
                    <Modal.Body>
                      <input type="text" value={nombre} onChange={(e) =>setnombre(e.target.value)} />
                    </Modal.Body>
                    <Modal.Body>
                      <input type="text" value={genero} onChange={(e) =>setgenero(e.target.value)} />
                    </Modal.Body>
                    <Modal.Body>
                      <input type="text" value={precio} onChange={(e) =>setprecio(e.target.value)} />
                    </Modal.Body>
                    <Modal.Body>
                      <input type="text" value={cantidad} onChange={(e) =>setcantidad(e.target.value)} />
                    </Modal.Body>
                    <Modal.Body>
                      <input type="text" value={imagen} disabled />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => {
                        setShow(false)
                        actualizar()
                      }}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
    </Container>
  );
}

export default AdminTablaProductos;
