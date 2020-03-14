import {SET_STOCK} from "../constants";


export const setStockAction = stock => ({
    type: SET_STOCK,
    payload: stock,
});