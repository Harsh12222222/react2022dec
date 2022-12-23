import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Users() {  

  
  return (
  <div>
  
       {/* Display the nested route component */}
       <Outlet/>  
  </div>
  )
}




/* 
   
   /*  
     Run Multiple Api parallel

    let api1 = 'https://jsonplaceholder.typicode.com/users'
    let api2 = 'https://jsonplaceholder.typicode.com/comments'
    
    const requestOne = axios.get(api1)
    const requestTwo = axios.get(api2)
    
    axios.all([requestOne,requestTwo])
         .then((response)=>{
            console.log(response)
         })
         .catch((error)=>{
           console.log(error)
         })
 */

