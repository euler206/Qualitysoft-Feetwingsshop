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

function NavbarComponent() {
  return (
    <>
      <Navbar variant="dark" className="bg-NavBar">
        <Container>
          <Navbar.Brand href="#home">
            <Image width={70} src={logo} />
          </Navbar.Brand>
          <Navbar.Brand href="#home">FeetWings Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Ofertas</Nav.Link>
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
