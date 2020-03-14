import {SET_STOCK} from "../constants";

const initState = {
    GOOG: 0,
    AAPL: 0,
    MSFT: 0,
    AMZN: 0
};

const reducer = (state=initState, {type, payload}) => {
    switch (type) {
        case SET_STOCK:
            return {
                ...payload
            };
        default:
            return{
                ...state
            }
    }
};

export default reducer;