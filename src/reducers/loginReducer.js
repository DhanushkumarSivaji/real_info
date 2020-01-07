import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from '../actions/types';
  
  const initialState = {
    user: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
  
      default:
        return state;
    }
  };