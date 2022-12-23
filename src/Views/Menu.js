import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
  return (
    <div>
          <Link to="/home">Home</Link>&nbsp;&nbsp;
          <Link to="/about">About</Link>&nbsp;&nbsp;
          <Link to="/todo">Todo</Link>&nbsp;&nbsp;
          <Link to="/users">Users</Link>
           
         

        
    </div>
  )
}
