import { createStore, combineReducers } from "redux"
import myReducer from "../Reducer/reducer"
import myReducer2 from "../Reducer/reducer2"

const combinedReducers = combineReducers({reducer1:myReducer, reducer2: myReducer2})

const myStore = createStore(combinedReducers) 
// registering the reducers with the stores

export default myStore