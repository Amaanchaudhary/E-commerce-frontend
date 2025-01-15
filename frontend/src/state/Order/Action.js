import axios from "axios"
import { ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { api } from "../../config/apiConfig"
import { getUser } from "../Auth/Action"

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST })
  try {
    const { data } = await api.post(
      `/api/orders`,
      reqData.address
    )

    if (data._id) {
      reqData.navigate({ search: `step=3&order_id=${data._id}` })
    }
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log("catch", error);
    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload: error.messsage
    })
  }
}

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST })
  try {
    const { data } = await api.get(
      `/api/orders/${orderId}`
    )
    console.log("order by id", data)
    dispatch({
      type: GET_ORDER_BY_ID_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log("catch", error);
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload: error.messsage
    })
  }
}


export const addAdress = (address) => async (dispatch) => {
  dispatch({ type: ADD_ADDRESS_REQUEST })
  const jwt = localStorage.getItem("jwt")

  try {
    const { data } = await api.post(
      "/api/orders/address", address
    )
    dispatch({ type: ADD_ADDRESS_SUCCESS })
    dispatch(getUser(jwt))

  } catch (error) {
    console.log("catch", error);
    // dispatch({
    //   type: GET_ORDER_BY_ID_FAILURE,
    //   payload: error.messsage
    // })
  }
} 