// hmare pass ab multiple reducers hia to hum inko combine kr lenge
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductsReducer } from "./productReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    product: selectedProductsReducer,
})

export default reducers