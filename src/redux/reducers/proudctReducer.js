// we need to import actiontypes for action
import { ActionTypes} from '../contants/action-types';


// creating reducer
const initialState={
    products:[],
   
}
                  //action ko destrure kr dnege  
export const productReducer=(state=initialState,{type,payload})=>{
switch(type)
{
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload}
        default:
            return state
        
}
}