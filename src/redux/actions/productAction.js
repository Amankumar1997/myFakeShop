import {ActionTypes} from '../contants/action-types'
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
        type:ActionTypes.SELECETED_PRODUCT,
        payload:product
    }
    }

    export const removeSelectedProduct=(product)=>{
        return{
            //here we want to setproduct so the type is setproduct
            type:ActionTypes.REMOVE_SELECETED_PRODUCT,
            
        }
        }