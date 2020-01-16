import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-unresolved
import authReducer from './authReducer';
import contactReducer from './contactReducer';

export default combineReducers({
  login: authReducer,
  contact: contactReducer,
});
