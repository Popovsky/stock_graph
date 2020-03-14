import {SET_WS} from "../constants";

export const wsSetAction = ws => ({
    type: SET_WS,
    payload: ws,
});