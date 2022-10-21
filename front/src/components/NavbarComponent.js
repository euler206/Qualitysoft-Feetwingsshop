import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Form, Button, Navbar, Badge } from "react-bootstrap/";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";

function NavbarComponent() {
  return (
    <>
      <Navbar variant="dark" className="bg-NavBar">
        <Container>
          <Navbar.Brand href="#home">FeetWings Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Catalogo</Nav.Link>
            <Nav.Link href="#pricing">Hombres</Nav.Link>
            <Nav.Link href="#pricing">Mujer</Nav.Link>
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
          <IconContext.Provider value={{ color: "#fff", className: "myicons" }}>
            <FaUser />
            <FaShoppingCart/><Badge  bg="danger">2</Badge>

            </IconContext.Provider>
          </Nav>

          
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
