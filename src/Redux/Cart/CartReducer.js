import { ADD_ITEM, BUY_CAKE, DELETE_ITEM } from "./CartActionType"
// State
const initialState = {
    numOfItems:0,
    numOfCakes:30
}
// Reducer
// action = {type:ADD_ITEM}
const cartReducer = (state =initialState ,action)=>{

       switch(action.type){
           case ADD_ITEM:
                return{
                    ...state,
                    numOfItems:state.numOfItems + 1   
                }
            case DELETE_ITEM:
                return{
                    ...state,
                    numOfItems:state.numOfItems - 1 
                }
            case BUY_CAKE:
                /* 
                  action = {type:BUY_CAKE,payload:qty}
                                */
                return{
                    ...state,
                    numOfCakes:state.numOfCakes - action.payload 
                }

           default:
                return state // { numOfItems: 0}

       }
}
// export reducer outside to use
export default cartReducer