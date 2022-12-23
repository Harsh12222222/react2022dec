import React,{useState} from 'react'

export default function UseStateDemo() {
    
    const [message,setMessage] =  useState('Please subscribe')
    const changeName = ()=>{
      setMessage('Thank you for subscribing')
   }

  return (
    <div>
          <h1> Name = {message}</h1>
          <button onClick={changeName}>subscribe</button>
        
    </div>
  )
}
