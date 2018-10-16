import personInfoReducer from "./personInfoReducer.js";
import scheduleReducer from "./scheduleReducer.js";
import storeReducer from "./storeReducer.js";
import productReducer from "./productReducer.js";
import { combineReducers } from 'redux';

const reducer = combineReducers({
  personInfo: personInfoReducer,
  schedule: scheduleReducer,
  storeInfo: storeReducer,
  product: productReducer,
});

export default reducer;