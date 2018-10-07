import personInfoReducer from "./personInfoReducer.js";
import scheduleReducer from "./scheduleReducer.js";
import { combineReducers } from 'redux';

const reducer = combineReducers({
  personInfo: personInfoReducer,
  schedule: scheduleReducer,
});

export default reducer;