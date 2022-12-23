import React,{useState} from 'react'
import HOCImplementation from './HocImplementation'

function ClickCounter(props) {
  

  return (
    <div>
          <h1>Count:{props.count}</h1>
          <button onClick={props.incrementCounter}>
              Increment
          </button>
    </div>
  )
}

export default HOCImplementation(ClickCounter)