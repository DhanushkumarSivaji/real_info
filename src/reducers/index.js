import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactReducer from "./contactReducer";
export default combineReducers({
  login: authReducer,
  contact: contactReducer
});
