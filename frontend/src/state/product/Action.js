import { api } from "../../config/apiConfig"
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

const findProducts = (reqData) => (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST })
  const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData
  try {
    const { data } = api.get(`/api/products/color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })

  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
  }
}


const findProductsById = (reqData) => (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
  const { productId } = reqData
  try {
    const { data } = api.get(`/api/products/id/${productId}`)
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })

  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
  }
}