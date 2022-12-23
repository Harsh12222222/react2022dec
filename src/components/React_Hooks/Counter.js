import React,{useState} from 'react'

export default function Counter() {

  const [count, setCount] = useState(0)

  const incrementCount = ()=>{
          //prevCount = 1
          setCount((prevCount)=>prevCount+1)
         // prevCount+1 = 1+1 = 2
   

   }
  return (
    <div>
          <h3>Count : {count}</h3>
          <button onClick={incrementCount} >Increment</button>
    </div>
  )
}
