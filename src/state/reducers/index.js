// ek se jyada reducer file hone par ham unhe ek sath export karenge

import { combineReducers } from "redux";  // ye ham redux se import kar rhe hai 
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount: amountReducer // abhi yha ek hi reducer hai yha ek se jyada bhi ho sakte hai // ye vhi amountReducer hai jise hamne import kiya hai 
})
export default reducers;