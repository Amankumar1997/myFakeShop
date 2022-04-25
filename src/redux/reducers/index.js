// hmare pass ab multiple reducers hia to hum inko combine kr lenge
import { combineReducers } from "redux";
import { productReducer } from "./proudctReducer";

const reducers=combineReducers({
    allProducts:productReducer,
})

export default reducers