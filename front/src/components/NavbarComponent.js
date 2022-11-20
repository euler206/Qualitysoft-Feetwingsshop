import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {
  Form,
  Button,
  Navbar,
  Badge,
  Image,
  NavDropdown,
  Dropdown,
} from "react-bootstrap/";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../recursos/images/logo.png";
import { useEffect, useState } from "react";
import CarritoModal from "./CarritoModal";

function NavbarComponent({ Rol }) {
  const handleClose = () => setmostrarModal(false);
  const [mostrarModal, setmostrarModal] = useState(false);
  const [carrito, setCarrito] = useState(0);
  const [dataLogued, setdataLogued] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || "Cliente"
  );
  const [isLogued, setisLogued] = useState(dataLogued.correo ? true : false);  
  useEffect(() => {
    setInterval(() => {
      const items = JSON.parse(localStorage.getItem("carrito"));
      if (items) {
        setCarrito(items.length);
      }
    }, 1000);
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("userInfo");
    window.location.reload(false);
  };

  return (
    <>
      <Navbar variant="dark" className="bg-NavBar">
        <Container>
          <Navbar.Brand href="/">
            <Image width={70} src={logo} />
          </Navbar.Brand>
          <Navbar.Brand href="/">FeetWings Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Catalogo">Todos</NavDropdown.Item>
              <NavDropdown.Item href="/Hombre">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="/Mujer">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="/Kids">Niños</NavDropdown.Item>
            </NavDropdown>          
            {Rol === "Admin" ? (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="/crearproducto">
                  Crear Producto
                </NavDropdown.Item>
                <NavDropdown.Item href="/listarproductos">
                  Listar Productos
                </NavDropdown.Item>
                <NavDropdown.Item href="/generarventa">
                  Generar Venta
                </NavDropdown.Item>
                <NavDropdown.Item href="/listarventas">
                  Listar Ventas
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              ""
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="me-auto">
            <IconContext.Provider
              value={{ color: "#fff", className: "myicons" }}
            >
              <Dropdown>
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                  <FaUser />
                </Dropdown.Toggle>

                {isLogued ? (
                  <Dropdown.Menu>
                    <Dropdown.Item href="/login">Perfil</Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        cerrarSesion();
                      }}
                    >
                      Cerrar Sesion
                    </Dropdown.Item>
                  </Dropdown.Menu>
                ) : (
                  <Dropdown.Menu>
                    <Dropdown.Item href="/login">Iniciar Sesion</Dropdown.Item>                    
                  </Dropdown.Menu>
                )}
              </Dropdown>

              <FaShoppingCart onClick={() => setmostrarModal(true)} />
              <Badge onClick={() => setmostrarModal(true)} bg="danger">
                {carrito}
              </Badge>
            </IconContext.Provider>
          </Nav>
        </Container>
        <CarritoModal mostrar={mostrarModal} handleClose={handleClose} />
      </Navbar>
    </>
  );
}

export default NavbarComponent;
