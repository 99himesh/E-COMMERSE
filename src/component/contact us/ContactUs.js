import React,{useRef} from "react";
import { Button } from "react-bootstrap";
const ContactUs=(props)=>{
  const name=useRef('');
  const email=useRef('');
  const contact=useRef('');




    async function storeData(event) {
      event.preventDefault();
      const data={
        nameValue:name.current.value,
        emailValue:email.current.value,
        contactValue:contact.current.value,
      
       }
       
       props.onAdd(data);
       console.log(props.onAdd(data))
      }




    return <div className="container text-center">
        <div className="row justify-content-center" style={{margin:'0 auto'} }>
           <h3 style={{fontSize:'50px',fontWeight:"bold" }}>CONTACT US</h3>
            <form >
                <input   ref={name} style={{boxSizing:'border-box' ,width:'100%' ,padding:'10px ', margin:'20px 0'}} type="text" placeholder="YOUR NAME"/>
                <input  ref={email} style={{boxSizing:'border-box' ,width:'100%' ,padding:'10px ', margin:'20px 0'}}  type="text" placeholder="YOUR EMAIL"/>
                <input  ref={ contact} style={{boxSizing:'border-box' ,width:'100%' ,padding:'10px ', margin:'20px 0'}} type="text" placeholder="YOUR CONTACT"/>
                <div style={{margin:'20px  auto' ,}}>
               <Button  onClick={storeData} >SUBMIT</Button>
               </div>
 
            </form>

        </div>
         
    </div>
}

export default ContactUs;