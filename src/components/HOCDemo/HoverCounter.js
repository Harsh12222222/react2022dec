import React,{useState} from 'react'
import HOCImplementation from './HocImplementation'

 function HoverCounter(props) {
 

  return (
    <div>
      <h1 onMouseOver={props.incrementCounter}>
          Count:{props.count}
      </h1>
        
    </div>
  )
}


export default HOCImplementation(HoverCounter)