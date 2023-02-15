import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../contextStorage/CartContext";
import AuthContext from "../store/AuthContext";
const ContactUs = (props) => {
  const name = useRef('');
  const email = useRef('');
  const contact = useRef('');

  const ctx=useContext(CartContext);
  const Auth=useContext(AuthContext)
  

  const getDataForCart = async (id) => {
    const response = await fetch(
      `https://e-commerce-8a986-default-rtdb.firebaseio.com/himeshkas/${Auth.uId}/.json`,
      {
        method: "GET",

        header: {
          "content-Type": "application/json",
        },
      }
    );
    const trasnformDataResponse = await response.json();
    const finalvalue = Object.values(trasnformDataResponse);
    ctx.replace(finalvalue);
  }
  useEffect(() => {
    getDataForCart();
  })

  const submitHandler = async (event) => {
    event.preventDefault();

    let nameValue = name.current.value;
    let emailValue = email.current.value;
    let contactValue = contact.current.value;


    try {
      const response = await fetch(
        "https://e-commerce-8a986-default-rtdb.firebaseio.com/himesh.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            contact: contactValue
          }),
          header: {
            "content-Type": "application/json",
          },
        }

      );
      console.log(response)
      debugger
      console.log(nameValue)
      if (response.ok == true) {
        // name.current.value="";
        name.current.value = "";
        email.current.value = "";
        contact.current.value = "";
      }
      console.log(nameValue)


    }
    catch {
      console.log("error");
    }
  };



  return (<div className="container text-center py-5">
    <div className="row justify-content-center py-5 bg-primary" style={{ margin: '0 auto' }}>
      <h3 style={{ fontSize: '50px', fontWeight: "bold" }}>CONTACT US</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }} >

        <form onSubmit={submitHandler}  >
          <p style={{ color: 'black', background: 'red', margin: "20px 0", padding: '10px 5px' }}>We are always try to help you . We are available 24 X 7 for you. please contact 1800-502-444 or email ecommerse@gmail.com </p>
          <input ref={name} style={{ display: 'block', border: '0', padding: '5px', width: '100%', margin: '20px 0' }} type="text" placeholder="YOUR NAME" />

          <input ref={email} style={{ display: 'block', border: '0', padding: '5px', width: '100%', margin: '20px 0' }} type="text" placeholder="YOUR EMAIL" />
          <input ref={contact} style={{ display: 'block', border: '0', padding: '5px', width: '100%', margin: '20px 0' }} type="text" placeholder="YOUR CONTACT" />
          <div style={{ margin: '20px  auto', }}>
            <Button variant="danger" type="submit" >SUBMIT</Button>
          </div>

        </form>
      </div>
    </div>

  </div>
  );

}
export default ContactUs;
