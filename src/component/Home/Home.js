import { Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import AuthContext from "../store/AuthContext";
import CartContext from "../contextStorage/CartContext";
const HomePage = () => {
  const Auth=useContext(AuthContext);
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

  return (
    <div className="container "  style={{margin:'0 auto',  textAlign:'center'} }>
      <div className="row  "  style={{padding:'100px 0'}} >
        <h4 style={{fontSize:'30px' ,fontWeight:'bold', paddingBottom:'20px'}}>TOURS</h4>
          <table >
            <tr className="py-5" style={{ borderBottom: '1px solid #ddd'}} >
              <td className="px-5">JUL16</td>
              <td className="px-5">DETROIT, MI</td>
              <td className="px-5">DTE ENERGY MUSIC THEATRE</td>
           <td>
                <Button className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
            <tr className="px-5" style={{ borderBottom: '1px solid #ddd'}}>
              <td className="px-5">JUL19</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}> BUY TICKET</Button>
              </td>
            </tr>
            <tr  style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
           
            <tr style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd'}}>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <Button  className="my-2" style={{background:'#56CCF2' ,border:'0'}}>BUY TICKET</Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    
  );
  };

export default HomePage;
