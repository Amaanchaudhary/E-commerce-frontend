import { BaseURL } from "../../config/apiConfig"
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
  LOGOUT
} from './ActionType.js'
import axios from 'axios'

const token = localStorage.getItem("jwt")


const RegisterRequest = () => ({ type: REGISTER_REQUEST })
const RegisterSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const RegisterFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })

export const register = (userData) => async (dispatch) => {
  dispatch(RegisterRequest())
  try {
    const response = await axios.post(`${BaseURL}/auth/signup`, userData)
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt)
    }
    console.log("user" , user);
    dispatch(RegisterSuccess(user.jwt));
  } catch (error) {
    dispatch(RegisterFailure(error.message))
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null })
}

const LoginRequest = () => ({ type: LOGIN_REQUEST })
const LoginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const LoginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

export const login = (userData) => async (dispatch) => {
  dispatch(LoginRequest())
  try {
    const response = await axios.post(`${BaseURL}/auth/signin`, userData)
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt)
    }
    console.log("user" , user);
    dispatch(LoginSuccess(user.jwt));
  } catch (error) {
    dispatch(LoginFailure(error.message))
  }
}

const GetUserRequest = () => ({ type: GET_USER_REQUEST })
const GetUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const GetUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getUser = (jwt) => async (dispatch) => {
  dispatch(GetUserRequest())
  try {
    const response = await axios.get(`${BaseURL}/api/users/profile`, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })
    const user = response.data;
    console.log("user" , user);
    
    dispatch(GetUserSuccess(user));
  } catch (error) {
    dispatch(GetUserFailure(error.message))
  }
}
