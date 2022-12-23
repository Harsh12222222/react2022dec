import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addItem, buyCake, deleteItem } from './CartAction'

export default function Cart() {
    
  const [cakeQty,setCakeQty] = useState(0)
  // Accessing the redux store state {numOfItems:0}
  
  const reduxState = useSelector((state)=>state)
  /* 
   reduxState =  {
          numOfItems:0,
          numOfCakes:30
    }
  */

  const dispatch = useDispatch()

  return (
    <div>
           <h4>Cart : {reduxState.numOfItems}</h4>
           <button onClick={()=>dispatch(addItem())}>
               Add Item to Cart
           </button>
           <button onClick={()=>dispatch(deleteItem())}>
               Delete Item to Cart
           </button>

           <h4>Cakes Available: {reduxState.numOfCakes}</h4>
           <input type="number" placeholder="enter quantity"
                  onChange={event=>setCakeQty(event.target.value)}
             />
           <button onClick={()=>dispatch(buyCake(cakeQty))}>
               Buy Cake
           </button>
          
    </div>
  )
}
