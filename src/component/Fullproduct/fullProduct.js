import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartContext from "../contextStorage/CartContext";
import { productsArr } from "../product/storeList";

 const FullProduct=()=>{
   const param=useParams();
   const product=productsArr.filter(itm=>itm.id==param.fullproduct);
   const [error,setErrr]=useState();
   const ctx=useContext(CartContext)
 
   const addItem=async()=>{
    const existdata=ctx.item.findIndex((itm)=>  product[0].id==itm.id  )
     if(existdata===-1){
      ctx.addItem(product[0])
     try {
        const response = await fetch(
          "https://e-commerce-8a986-default-rtdb.firebaseio.com/himeshkas.json",
          {
            method: "POST",
            body: JSON.stringify(product[0]),
            header: {
              "content-Type": "application/json",
            },
          } 
        );
      }catch {
        console.log("error");
      }
    } else{
      alert('item already exist')
    }
  }
  
    return(<div>
       
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'50px 0'}}> 
     
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>{`Album ${product[0].id}`}</Card.Title>
       <img src={product[0].imageUrl} style={{width:"100%"}}></img>
       <h5 style={{color:'red' ,padding:'10px 0',textAlign:'center'}}>{error}</h5>
        <div style={{display:"flex",position:'relative'}}>
        <Card.Text style={{padding:"20px 0 0 10px",color:'green'}}>
          {`$ ${product[0].price}`}
        </Card.Text>
        <div style={{position:"absolute",right:"0",top:'10px' }}>
          <Button onClick={addItem} variant="primary">ADD TO CART</Button>
          </div>
        </div>
        <div style={{textAlign:'center',padding:'10px 0'}}>
        <p style={{color:'red'}}>only limited time offer</p>
        <h6 style={{color:'red'}}>only 5 are left </h6>
        </div>
      </Card.Body>
    </Card>

      
    </div>
    </div>)
 }
 export default FullProduct;