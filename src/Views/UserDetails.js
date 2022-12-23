import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function UserDetails() {

  const [singleUser,setSingleUser] = useState()
  //Obtain Route Parameter :  localhost:3000/users/4
  // Router Parameter = id = 4
  const res =  useParams()
  console.log(res) //{id: '8'}




  useEffect(()=>{
    
    axios.get('https://jsonplaceholder.typicode.com/users/'+res.id)
         .then((response)=>{
               console.log(response.data)
               setSingleUser(response.data)
         })
         .catch((error)=>{
                 console.log(error)
         })
   },[])
  
  return (
    <div style={{'marginTop':'30px','marginLeft':'30px'}}>
          <h3 style={{'color':'purple'}}>Record no : <span style={{'color':'red'}}>{res.id}</span></h3>
          <table border={1}>
              <tr>
                 <th>Name</th>
                 <td>{singleUser?.name}</td>
              </tr>
              <tr>
                 <th>Email</th>
                 <td>{singleUser?.email}</td>
              </tr>
              <tr>
                 <th>Username</th>
                 <td>{singleUser?.username}</td>
              </tr>
              <tr>
                 <th>Phone</th>
                 <td>{singleUser?.phone}</td>
              </tr>
              <tr>
                 <th>Website</th>
                 <td>{singleUser?.website}</td>
              </tr>
          </table>
    </div>
  )
}
