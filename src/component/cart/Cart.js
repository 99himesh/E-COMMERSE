import { cartElements } from "./CartList";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { propTypes } from "react-bootstrap/esm/Image";

const Cart = (props) => {


  const cartList = cartElements.map((item, i) => {
    return (
      <div className="container">
        <div className="row">
          <table>
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
              <td className="px-5">{item.quantity}</td>
              <Button
                style={{
                  background: "red",
                  margin: "30px 15px 0 0",
                  padding: "5px",
                }}
              >
                REMOVE
              </Button>
            </tr>
          </table>
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
          <tr style={{ fontSize: "17px", fontWeight: "bolder" }}>
            <th className="px-5">
              <u>ITEM</u>
            </th>
            <th className="px-5">
              <u>PRICE</u>
            </th>
            <th className="px-5">
              <u>QUANTITY</u>
            </th>
          </tr>
        </table>
        {cartList}
      </Modal.Body>
    </Modal>


  );
};
export default Cart;
