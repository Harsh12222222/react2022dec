import {createStore,applyMiddleware} from 'redux'
import cartReducer from './Cart/CartReducer'
import logger from 'redux-logger'


const store = createStore(cartReducer,applyMiddleware(logger))

export default store