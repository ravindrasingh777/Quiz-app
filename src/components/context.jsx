import React, { createContext, useEffect, useState } from 'react';
const maincontext=createContext()
const Context = (props) => {

    const[user,setuser]=useState(null)

    const login=(data)=>{
      setuser(data)
      localStorage.setItem("user",JSON.stringify(data))
    }


    const logout=(data)=>{
        setuser(null)
        localStorage.removeItem("user")
      }
  

    useEffect(
        ()=>{
          const lsuser=localStorage.getItem("user")
          if(lsuser != undefined){
             setuser(JSON.parse(lsuser))
          }
        },
        []
    )

    return (
        <maincontext.Provider value={{user,setuser,login,logout}} >
           {props.children} 
        </maincontext.Provider>
    );
}

export {maincontext};

export default Context;
