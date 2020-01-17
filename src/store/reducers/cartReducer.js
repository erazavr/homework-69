import {ADD_DISH, PURCHASING, PURCHASING_CANCEL, REMOVE_DISH} from "../actions/actionTypes";
const initialState = {
    cart: {},
    switch: false,
    price: 150,
    purchasing: false
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISH:
            let order;
            if(state.cart[action.name]){
                order = {...action.dish, count: state.cart[action.name].count + 1, cost: state.cart[action.name].cost + action.dish.cost}
            } else {
                order = {...action.dish, count: 1}
            }
            const orders = {...state.cart, [action.name]: order};
            return {
                ...state,
                cart: orders,
                switch: true,
                price: state.price + action.dish.cost
            };
        case REMOVE_DISH:
            if (state.cart[action.name].count === 0) {
                return state
            }
            return {
                ...state,
                cart: {...state.cart, [action.name]: {...action.dish, count: state.cart[action.name].count - 1, cost: state.cart[action.name].cost - action.dish.cost}},
                price: state.price - action.dish.cost

            };
        case PURCHASING:
            return {...state, purchasing: true};
        case PURCHASING_CANCEL:
            return {...state, purchasing: false};
        default:
            return state

    }
};
export default cartReducer;