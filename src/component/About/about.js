import React, { useContext, useEffect } from 'react';
import CartContext from '../contextStorage/CartContext';
import image from '../images/aboutimage.png'
import AuthContext from '../store/AuthContext';
const AboutPage = () => {
  const ctx=useContext(CartContext);
  const Auth=useContext(AuthContext)
  
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
    <div className="container py-5">
      <h2 style={{textAlign:'center' ,padding:'50px 0 0 0' ,fontSize:'30px ' ,fontWeight:'bolder'}}>About</h2>
      <div className="row" style={{color:'#777',fontSize:'16px'}}>
        <div className="col-3 offset-1">
         
          <img src={image} className='mt-5' style={{width:'100%' ,height:'250px' ,borderRadius:'50%' ,}}  /> 
        </div>
        <div className="col-7 mt-5">
         <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from </p>
        </div>
      </div>
      <div className='row' style={{color:'#777',fontSize:'16px'}}>
         <p> or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>
      </div>
    </div>
  );
};
export default AboutPage;
