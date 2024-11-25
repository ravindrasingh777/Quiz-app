import React, { createContext, useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
const maincontext=createContext()
const Context = (props) => {

    const[user,setuser]=useState(null)

    const[alldata,setalldata]=useState([])

     const fetchdata=()=>{
        const db = getDatabase();
        const starCountRef = ref(db, 'quiz/');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const newarray=Object.keys(data).map((d,i)=>{
          return {id:d,...data[d]}
        });
        console.log(newarray)
        setalldata(newarray)
        
     });
     }

     useEffect(
        ()=>{
            fetchdata()
        },[]
     )


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
        <maincontext.Provider value={{user,setuser,login,logout,alldata}} >
           {props.children} 
        </maincontext.Provider>
    );
}

export {maincontext};

export default Context;
