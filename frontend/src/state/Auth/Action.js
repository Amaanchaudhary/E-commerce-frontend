import { BaseURL } from "../../config/apiConfig"
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
  LOGOUT
} from './ActionType.js'

const token = localStorage.getItem("jwt")

const REGISTER_REQUEST = () => ({ type: REGISTER_REQUEST })
const REGISTER_SUCCESS = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const REGISTER_FAILURE = (error) => ({ type: REGISTER_FAILURE, payload: error })

export const register = (userData) => async (dispatch) => {
  dispatch(REGISTER_REQUEST())
  try {
    const response = await axios.post(`${BaseURL}/auth/signup`, userData)
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt)
    }
    dispatch(REGISTER_SUCCESS(user.jwt));
  } catch (error) {
    dispatch(REGISTER_FAILURE(error.message))
  }
}

export const logout = () => async (dispatch) => {
  dispatch(LOGOUT({ type: LOGOUT, payload: null }))
}

const LOGIN_REQUEST = () => ({ type: LOGIN_REQUEST })
const LOGIN_SUCCESS = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const LOGIN_FAILURE = (error) => ({ type: LOGIN_FAILURE, payload: error })

export const login = (userData) => async (dispatch) => {
  dispatch(LOGIN_REQUEST())
  try {
    const response = await axios.post(`${BaseURL}/auth/signin`, userData)
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt)
    }
    dispatch(LOGIN_SUCCESS(user.jwt));
  } catch (error) {
    dispatch(LOGIN_FAILURE(error.message))
  }
}

const GET_USER_REQUEST = () => ({ type: GET_USER_REQUEST })
const GET_USER_SUCCESS = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const GET_USER_FAILURE = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getUser = () => async (dispatch) => {
  dispatch(GET_USER_REQUEST())
  try {
    const response = await axios.get(`${BaseURL}/api/users/profile`, {
      Headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const user = response.data;
    dispatch(GET_USER_SUCCESS(user));
  } catch (error) {
    dispatch(GET_USER_FAILURE(error.message))
  }
}
