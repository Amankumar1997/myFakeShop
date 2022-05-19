import fakestoreapi from "../../apis/fakeStoreApi";
import {ActionTypes} from '../contants/action-types'



export const fetchProducts = () => async (dispatch) => {
    const response = await fakestoreapi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
  
  export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
  };



// creating action creator for products
export const setProducts=(products)=>{
return{
    //he we want to setproduct so the type is setproduct
    type:ActionTypes.SET_PRODUCTS,
    payload:products,
}
}

export const selectedProduct=(product)=>{
    return{
        //here we want to setproduct so the type is setproduct
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
    }

    export const removeSelectedProduct=()=>{
        return{
            //here we want to setproduct so the type is setproduct
            type:ActionTypes.REMOVE_SELECETED_PRODUCT,
            
        }
        }