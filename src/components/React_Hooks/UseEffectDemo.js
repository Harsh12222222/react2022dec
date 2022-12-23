import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
//   count = 0

/*   useEffect(()=>{
         document.title = `You clicked ${count} times`
         console.log('inside useEffect')
         console.log('Making api call')
        //  Make Api Call
  },[count])    */

  useEffect(()=>{
    document.title = `You clicked ${count} times`
    console.log('inside useEffect')
    console.log('Making api call')
   //  Make Api Call
  },[])    

  /* 
     [] =  Run useEffect once
     [count] = Run useEffect ,whenever the value of count changes.
  */

  /* 
   1) UseEffect run any statement automatically after component initialized.
   2) it re-render after making any changes(button click, input typing, state update,et.c) within component
  
  */

   const increment = ()=>{
      setCount(prevCount=> prevCount+1)
   }
  return (
    <div>
        <input type="text" onChange={(event)=> setName(event.target.value)} />
        <button onClick={increment}>Increment : COUNT= {count}</button>
    </div>
  )
}
