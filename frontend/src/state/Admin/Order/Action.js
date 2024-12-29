import { api } from "../../../config/apiConfig";
import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrder = () => {
  console.log("get All Orders");
  return async (dispatch) => {
    dispatch({ type: GET_ORDER_REQUEST })
    try {
      const response = await api.get(`/api/admin/orders/`)
      console.log("get all orders", response.data);
      dispatch({ type: GET_ORDER_SUCCESS, payload: response.data })
    } catch (error) {
      console.log("catch error", error);
      dispatch({ type: GET_ORDER_FAILURE, payload: error.message })
    }
  }
}

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRMED_ORDER_REQUEST })
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/confirmed`)
    console.log("confirmed order", response.data);
    dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: response.data })
  } catch (error) {
    console.log("catch error", error);
    dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message })
  }
}

export const shipOrder = (orderId) => async (dispatch) => {
  dispatch({ type: SHIP_ORDER_REQUEST })
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/ship`)
    console.log("ship order", response.data);
    dispatch({ type: SHIP_ORDER_SUCCESS, payload: response.data })
  } catch (error) {
    console.log("catch error", error);
    dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message })
  }
}

export const deliverOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVERED_ORDER_REQUEST })
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/deliver`)
    console.log("deliver order", response.data);
    dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: response.data })
  } catch (error) {
    console.log("catch error", error);
    dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message })
  }
}

export const cancelOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CANCELED_ORDER_REQUEST })
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/cancel`)
    console.log("cancel order", response.data);
    dispatch({ type: CANCELED_ORDER_SUCCESS, payload: response.data })
  } catch (error) {
    console.log("catch error", error);
    dispatch({ type: CANCELED_ORDER_FAILURE, payload: error.message })
  }
}

export const deleteOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST })
  try {
    const response = await api.put(`/api/admin/orders/${orderId}/delete`)
    console.log("delete order", response.data);
    dispatch({ type: DELETE_ORDER_SUCCESS, payload: orderId })
  } catch (error) {
    console.log("catch error", error);
    dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message })
  }
}