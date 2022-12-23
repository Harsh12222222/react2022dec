import { ADD_ITEM, BUY_CAKE, DELETE_ITEM } from "./CartActionType"

// Action Creator
const addItem = ()=>{
    return {
        type:ADD_ITEM
    }
}

const deleteItem = ()=>{
    return{
        type:DELETE_ITEM
    }
}

const buyCake = (qty)=>{
   return{
     type:BUY_CAKE,
     payload:qty
   }
  
}

export {addItem,deleteItem,buyCake}