import React,{useState} from "react";
import AuthContext from "./AuthContext";
 
 const AuthContextProvider=(props)=>{
    let initialtoken=localStorage.getItem('token');
    let initialuID=localStorage.getItem("uID");
    const[token,setToken]=useState(initialtoken);
    const[uId,setuID]=useState(initialuID);

    const userISLoggedIn=!!token;
  
    const loginHandler=(token,uID)=>{
      setToken(token);
      localStorage.setItem('token',token);
      setuID(uID);
      localStorage.setItem('uID',uID);

    }
    const logoutHandler=()=>{
      setToken(null);
      localStorage.removeItem('token');
      setuID(null);
      localStorage.removeItem("uID")
    }
  
  
    const contextValue={
      token:token,
      isLoggedIn:userISLoggedIn,
      login:loginHandler,
      logout:logoutHandler,
      uId:uId,
      
    }
  
      return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  }
   export default AuthContextProvider;
  