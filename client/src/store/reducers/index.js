import {combineReducers} from "redux";

import ws from './wsReducer'
import stock from './stockReducer'

export const reducer = combineReducers({
    ws,
    stock,
});