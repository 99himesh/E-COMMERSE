import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Heading from "./Heading";
import Cart from "../cart/Cart";
import React,{useContext,useState} from "react"; 
import CartContext from "../contextStorage/CartContext";
import {NavLink} from "react-router-dom";

const Header = () => {
  const ctx=useContext(CartContext);
        const [ cartShow,setCartShow]=useState(false);
        const showCartHandlers=()=>setCartShow((prev)=>!prev);
        
      
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ position: "fixed", width: "100%", margin: "0 0 10px 0",zIndex: '999' }}>
        <Container>
          <Nav className="me-auto " style={{ margin: "0 auto"  }}>
            <NavLink to="/home" style={{textDecoration:'none',color:'white',padding:"10px 0 0 0"}}>
              HOME
            </NavLink>
            <NavLink to="/" style={{textDecoration:'none',color:'white',padding:"10px 30px 0 30px"}}>
              STORE
            </NavLink>
            <NavLink to="/about"  style={{textDecoration:'none',color:'white',padding:"10px 0 0 0"}}>
              ABOUT
            </NavLink >
          </Nav>
        </Container>
        <Button variant="outline-primary" onClick={showCartHandlers}  >Cart {ctx.item.length} </Button>
       {cartShow &&   <Cart onHide={showCartHandlers} />}
      </Navbar>
      <Heading />
    </div>
  );
};
export default Header;
