import {ADD_DISH, PURCHASING, PURCHASING_CANCEL, REMOVE_DISH} from "./actionTypes";

export const addDish = (dish, name) => {
    return {type: ADD_DISH, dish, name};
};
export const removeDish = (dish, name) => {
    return {type: REMOVE_DISH, dish,name}
};
export const purchaseHandler = () => ({type: PURCHASING});
export const purchasingCancel = () => ({type: PURCHASING_CANCEL});