import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Heading from "./Heading";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ position: "fixed", width: "100%", margin: "0 0 10px 0" }}
      >
        <Container>
          <Nav className="me-auto" style={{ margin: "0 auto" }}>
            <Nav.Link href="#home" className="px-5">
              HOME
            </Nav.Link>
            <Nav.Link href="#features" className="px-5">
              STORE
            </Nav.Link>
            <Nav.Link href="#pricing" className="px-5">
              ABOUT
            </Nav.Link>
          </Nav>
        </Container>
        <Button variant="outline-primary ">Cart</Button>
      </Navbar>
      <Heading />
    </div>
  );
};
export default Header;
