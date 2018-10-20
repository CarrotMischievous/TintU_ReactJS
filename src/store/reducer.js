import personInfoReducer from "./personInfoReducer.js";
import scheduleReducer from "./scheduleReducer.js";
import storeReducer from "./storeReducer.js";
import productReducer from "./productReducer.js";
import orderReducer from "./orderReducer.js";
import { combineReducers } from 'redux';

const reducer = combineReducers({
  userInfo: personInfoReducer,
  schedule: scheduleReducer,
  storeInfo: storeReducer,
  product: productReducer,
  order: orderReducer,
});

export default reducer;