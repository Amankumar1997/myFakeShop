import { createStore } from "redux";
import reducers from './reducers/index'

// creating store 
// it will take two args one is reducer and state
const store=createStore(reducers,
    {},
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )// here now at this time my state is emty
export default store