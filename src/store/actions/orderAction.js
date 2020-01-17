import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "./actionTypes";
import axiosDishes from "../../axiosApi";

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, error});

export const creatOrder = order => {
    return async dispatch => {
        try {
          dispatch(orderRequest());
          await axiosDishes.post('/orders.json', order);
          dispatch(orderSuccess())
        } catch (e) {
            dispatch(orderFailure(e))
        }
    }
}