import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { AuthReducer } from './Auth/Reducers'
import { customerProductReducer } from './product/Reducer'
import { cartReducer } from './cart/Reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { orderReducer } from './Order/Reducer'

const rootReducers = combineReducers({
  auth: AuthReducer,
  product: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
})

// Create the store with middleware and Redux DevTools enabled
export const store = legacy_createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk)))

