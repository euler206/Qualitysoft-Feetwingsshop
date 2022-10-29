import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {
  Form,
  Button,
  Navbar,
  Badge,
  Image,
  NavDropdown,
} from "react-bootstrap/";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../recursos/images/logo.png";

function NavbarComponent({ Rol }) {
  
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
            <Nav.Link href="#pricing">Ofertas</Nav.Link>
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
              <FaUser />
              <FaShoppingCart />
              <Badge bg="danger">2</Badge>
            </IconContext.Provider>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
