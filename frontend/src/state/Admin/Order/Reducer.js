import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDER_FAILURE, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType"

const initailState = {
  loading: false,
  orders: [],
  error: ''
}

const adminOrderReducer = (state = initailState, action) => {
  switch (action.type) {

    // Get order Cases
    case GET_ORDER_REQUEST:
      return { ...state, loading: true, error: "" }
    case GET_ORDER_SUCCESS: {
      return { loading: false, orders: action.payload, error: "" }
    };
    case GET_ORDER_FAILURE:
      return { orders: [], loading: false, error: action.payload }

    // combined request cases
    case CONFIRMED_ORDER_REQUEST:
    case PLACED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCELED_ORDER_REQUEST:
      return { ...state, isLoading: true }

    // combined success cases
    case CONFIRMED_ORDER_SUCCESS:
      return { ...state, confirmed: action.payload, isLoading: false }
    case PLACED_ORDER_SUCCESS:
      return { ...state, placed: action.payload, isLoading: false }
    case DELIVERED_ORDER_SUCCESS:
      return { ...state, delivered: action.payload, isLoading: false }
    case CANCELED_ORDER_SUCCESS:
      return { ...state, canceled: action.payload, isLoading: false }

    // combined failure cases
    case CONFIRMED_ORDER_FAILURE:
    case PLACED_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
    case CANCELED_ORDER_FAILURE:
      return { ...state, error: action.paylaod, isLoading: false }

    // delete order cases 
    case DELETE_ORDER_REQUEST:
      return { ...state, loading: true }
    case DELETE_ORDER_SUCCESS:
      return {
        ...state, loading: false,
        orders: state.orders.filter((order) => order._id !== action.payload)
      }
    case DELETE_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload }

    // Ship order cases
    case SHIP_ORDER_REQUEST:
      return { ...state, isLoading: true, error: null }
    case SHIP_ORDER_SUCCESS:
      return { ...state, isLoading: false, shipped: action.payload }
    case SHIP_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export default adminOrderReducer