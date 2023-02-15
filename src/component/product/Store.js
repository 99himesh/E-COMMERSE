import { Button } from "react-bootstrap";
import ProductList, { productsArr } from "./storeList";
import React,{useContext, useEffect} from "react";
import CartContext from "../contextStorage/CartContext";
import { Link } from "react-router-dom";
import AuthContext from "../store/AuthContext";


const StorePage = (props) => {
  const Auth=useContext(AuthContext)
  const ctx=useContext(CartContext);

  
  const getDataForCart=async(id)=>{
    
    const response = await fetch(
      `https://e-commerce-8a986-default-rtdb.firebaseio.com/himeshkas/${Auth.uId}/.json`,
      {
        method: "GET",
        
        header: {
          "content-Type": "application/json",
        },
      } 
    );
    const trasnformDataResponse=await response.json();
    const finalvalue=Object.values(trasnformDataResponse);
       ctx.replace(finalvalue);
}
useEffect(()=>{
  getDataForCart();
})






  const addItem=async(item)=>{
  const existdata=ctx.item.findIndex((itm)=>  item.id==itm.id  )
   if(existdata===-1){
    ctx.addItem(item)
   try {
      const response = await fetch(
        `https://e-commerce-8a986-default-rtdb.firebaseio.com/himeshkas/${Auth.uId}.json`,
        {
          method: "POST",
          body: JSON.stringify(item),
          header: {
            "content-Type": "application/json",
          },
        } 
      );
      const trasnformDataResponse=await response.json();
      const value=Object.values(trasnformDataResponse);
      localStorage.setItem(`${item.id}`,value);
    }catch {
      console.log("error");
    }
  } else{
    alert('item already exist')
  }
}
 

  const itemList = productsArr.map((item, index) => {
    return (
      <div className="d-flex justify-content-center">     
        <div className="card my-5 " style={{ width: "16rem" }}>
        <Link to={`/store/${item.id}`} key={index} >
          <div className="card-header  text-center"
            style={{ fontSize: "20px", fontWeight: "bold" }} >
            Album {index + 1}
          </div>

          <img src={item.imageUrl} style={{width:'100%'}}></img>
          </Link>
          <div className="card-body">
            <span className="pt">$ {item.price}</span>
            <Button className="float-end" onClick={addItem.bind(null,item)} >ADD TO CART</Button>
            <h4 className="text-center"> </h4>
          </div>
        </div>
      
      
      </div>
 
    );
  });
  return (
    <>
      <div className="container pt-5">
        <h2
          style={{
            
            padding: "50px 0",
            textAlign: "center",
            font: "40px ",
            fontWeight: "bold",
          }}
        >
          MUSIC
        </h2>
        <div className="row row-cols-2 ">{itemList}</div>
      </div>
    </>
  );
};
export default StorePage;
