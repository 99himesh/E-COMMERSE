import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Heading from "./Heading";
import Cart from "../cart/Cart";
import React,{useContext,useEffect,useState} from "react"; 
import CartContext from "../contextStorage/CartContext";
import {NavLink} from "react-router-dom";
import AuthContext from "../store/AuthContext";

const Header = () => {
  const ctx=useContext(CartContext);
  const [ cartShow,setCartShow]=useState(false);
  const Authctx=useContext(AuthContext);
      
    
  // const showCartHandlers=()=>{
    const getdata=async(event)=>{
      // event.preventDefault();
      setCartShow((prev)=>!prev);
  
      
      try {
        const response = await fetch(
          "https://e-commerce-8a986-default-rtdb.firebaseio.com/himeshkas.json",
          {
            method: "GET",
          } 
        );
        const transformdataresponse=await response.json();
        debugger
        console.log(transformdataresponse)
      
      }catch {
        console.log("error");
      }
      
      
        
     
    


  }

  // useEffect(()=>{
  //   getdata();
  // })
      
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ position: "fixed", width: "100%", margin: "0 0 10px 0",zIndex: '999' }}>
        <Container>
          <Nav className="me-auto " style={{ margin: "0 auto"  }}>
           {Authctx.isLoggedIn && <NavLink to="/home" style={{textDecoration:'none',color:'white',padding:"10px 0 0 0"}}>
              HOME
            </NavLink>}
            {Authctx.isLoggedIn && <NavLink to="/store" style={{textDecoration:'none',color:'white',padding:"10px 30px 0 30px"}}>
              STORE
            </NavLink>}
            {Authctx.isLoggedIn && <NavLink to="/about"  style={{textDecoration:'none',color:'white',padding:"10px 0 0 0"}}>
              ABOUT
            </NavLink >}
            {Authctx.isLoggedIn && <NavLink to="/contact"  style={{textDecoration:'none',color:'white',padding:"10px 0 0 30px"}}>
              CONTACT
            </NavLink >}
           { !Authctx.isLoggedIn && <NavLink to="/login"  style={{textDecoration:'none',color:'white',padding:"10px 0 0 30px"}}>
              LOGIN
            </NavLink >}
          </Nav>
        </Container>
        {Authctx.isLoggedIn && <NavLink to="/login"  style={{textDecoration:'none',color:'white',}}>
             <Button onClick={Authctx.logout} style={{marginRight:'20px'}}>logout</Button>
            </NavLink >}
        { Authctx.isLoggedIn && <Button  variant="outline-primary" onClick={getdata}  >Cart {ctx.item.length} </Button>}
       {cartShow &&   <Cart onHide={getdata} />}
      </Navbar>  
      {Authctx.isLoggedIn && <Heading />}
    </div>
  );
};
export default Header;
