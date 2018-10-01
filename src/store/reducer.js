import personInfoReducer from "./personInfoReducer.js";
import { combineReducers } from 'redux';

const reducer = combineReducers({
  personInfo: personInfoReducer,
});

export default reducer;