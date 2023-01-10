import { cartElements } from "./CartList";
import React, { useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { propTypes } from "react-bootstrap/esm/Image";
import CartContext from "../contextStorage/CartContext";

const Cart = (props) => {
 const [deletes,setDelete]=useState(true);
 const deleteHandler=()=> setDelete(false);
  const ctx = useContext(CartContext);
  
  
  
  
  //  ctx.item.forEach((item)=>{
  //   totalAmount=totalAmount+item.price;
  //  })
   const removeItemHandler=(id)=>{
    ctx.removeItem(id)
  };
 
 
  let  totalAmount=0;
 
  const cartList = ctx.item.map((item, i) => {
    totalAmount=totalAmount+item.price;
    return (
      <div key={item.id+i} className="container">
        <div className="row"  key={item.id} >
          <table  key={item.id}>
            <tbody>
            <tr>
              <td>
                <img
                  style={{
                    width: "50%",
                    padding: "10px 0",
                    borderRadius: "10px",
                  }}
                  src={item.imageUrl}
                />{" "}
              </td>
              <td className="px-5 text-center">{item.price}</td>
              <td className="px-5">{item.title}</td>
            </tr>
        
            </tbody>
          </table>
          
          <Button
             onClick={removeItemHandler.bind(null,item.id)}
                style={{
                  
                  background: "red",
               
                  padding: "5px",
                 }}
              >      REMOVE
            </Button>
        </div>
      </div>
    );
  });

  return (
     
        <Modal  show onHide={props.onHide}>
         <Modal.Header   closeButton>
        <Modal.Title style={{ fontSize: "30px", fontWeight: "bolder" }}>
          CART
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table>
          <tbody>
          <tr style={{ fontSize: "17px", fontWeight: "bolder" }}>
            <th className="px-5">
              <u>ITEM</u>
            </th>
            <th className="px-5">
              <u>price</u>
            </th>
            <th className="px-5">
              <u>QUANTITY</u>
            </th>
          </tr>
          </tbody>
        </table>
        {cartList}
    
      </Modal.Body>
      <div  className="p-5 text-center" >
        <h4>
        <span>TOTAl PRICE :- </span>
        <span>{totalAmount}</span>
        </h4> 
      </div>
    </Modal>
           

  );
};
export default Cart;
