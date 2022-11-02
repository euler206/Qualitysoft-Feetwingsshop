import React, { useEffect, useState } from "react";
import { Container, Table, Figure } from "react-bootstrap/";
import productos from "../data/productos.json";
import Dropdown from "react-bootstrap/Dropdown";



function AdminTablaProductos() {
  const [data, setData] = useState(productos);
  const [listadoMarcas, setlistadoMarcas] = useState(undefined);
  const [listadoGeneros, setlistadoGeneros] = useState(undefined);
  const [filtro, setfiltro] = useState("- Todas");
  const [filtroGenero, setfiltroGenero] = useState("- Todos");

  useEffect(() => {
    const unique =[...new Set(data.map(item => item.marca))]
    const unique2 =[...new Set(data.map(item => item.genero))]
    setlistadoMarcas(unique)
    setlistadoGeneros(unique2)

  }, [data])
  

  return (
    <Container>
      <h1>Lista de Productos</h1>
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
                <Dropdown.Item onClick={() => {
                  setData(productos)
                  setfiltro(` - Todos`)
                }}>Todos</Dropdown.Item>
                  {
                    listadoMarcas !== undefined ? 
                    listadoMarcas.map(item => (
                      <Dropdown.Item onClick={() =>(
                        setData(productos.filter(item2 => item2.marca === item ),
                        setfiltro(` - ${item}`)
                        
                        )
                        
                      )} >{item}</Dropdown.Item>
                    ))
                    : 
                    
                    ""
                  }
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
                <Dropdown.Item onClick={() => {
                  setData(productos)
                  setfiltroGenero(` - Todos`)
                }}>Todos</Dropdown.Item>
                  {
                    listadoGeneros !== undefined ? 
                    listadoGeneros.map(item => (
                      <Dropdown.Item onClick={() =>(
                        setData(productos.filter(item2 => item2.genero === item ),
                        setfiltroGenero(` - ${item}`)
                        
                        )
                        
                      )} >{item}</Dropdown.Item>
                    ))
                    : 
                    
                    ""
                  }
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminTablaProductos;
