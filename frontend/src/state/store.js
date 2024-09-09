import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { AuthReducer } from './Auth/Reducers'
import { customerProductReducer } from './product/Reducer'

const rootReducers = combineReducers({
  auth : AuthReducer,
  product: customerProductReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

