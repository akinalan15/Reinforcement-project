import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NewsNav() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#">News App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Technology</Nav.Link>
            <NavDropdown title="Topics" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Business</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Health</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Politics
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewsNav;
