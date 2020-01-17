import { DISHES_FAILURE, DISHES_REQUEST, DISHES_SUCCESS} from "./actionTypes";
import axiosDishes from "../../axiosApi";

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = dish => ({type: DISHES_SUCCESS, dish});
export const dishesFailure = error => ({type: DISHES_FAILURE, error});

export const getDishes = () => {
    return async dispatch => {
        try {
            dispatch(dishesRequest());
            const response = await axiosDishes.get('/dishes.json');
            dispatch(dishesSuccess(response.data));
        } catch (e) {
            dispatch(dishesFailure(e))
        }
    }
};