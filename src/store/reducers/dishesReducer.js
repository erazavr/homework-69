import {DISHES_SUCCESS} from "../actions/actionTypes";
const initialState = {
    dishes: {}
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISHES_SUCCESS:
            return {...state, dishes: action.dish};
        default:
            return state

    }
};
export default cartReducer;