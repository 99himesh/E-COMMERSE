import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Heading from "./Heading";
import Cart from "../cart/Cart";
import { useState } from "react";

const Header = () => {
        const [ cartShow,setCartShow]=useState(true);
        const showCartHandlers=()=>setCartShow((prev)=>!prev);
        
      
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ position: "fixed", width: "100%", margin: "0 0 10px 0",'z-index': '999' }}>
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
        <Button variant="outline-primary" onClick={showCartHandlers}  >Cart</Button>
       {cartShow &&  <Cart onHide={showCartHandlers} />}
      </Navbar>
      <Heading />
    </div>
  );
};
export default Header;
