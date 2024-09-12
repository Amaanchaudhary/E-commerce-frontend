import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { AuthReducer } from './Auth/Reducers'
import { customerProductReducer } from './product/Reducer'
import { cartReducer } from './cart/Reducer'
import { orderReducer } from './Order/Reducer'

const rootReducers = combineReducers({
  auth: AuthReducer,
  product: customerProductReducer,
  cart: cartReducer,
  order: orderReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

