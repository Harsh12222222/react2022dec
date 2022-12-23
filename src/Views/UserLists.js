import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserLists() {
    
  const [allUsers , setAllUsers] = useState()

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response)=>{
                 //  console.log(response.data)
                  setAllUsers(response.data)
             })
             .catch((error)=>{
                  console.log(error)
             })
    },[])

   return (
    <div>
      
      {
           allUsers?
                allUsers.map((user,index)=>(
                  <ul style={{'marginLeft':'20px'}}>                    
                     <li key={index} >
                         <Link to={`/users/${user.id}`} style={{'color':'orangered','textDecoration':'none'}}>
                             {user.name}
                         </Link>
                     </li>
                  </ul>
                 
                ))
                :
               <h5>Loading...</h5>
         }
    </div>
  )
}
