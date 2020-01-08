import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
  };
  export default (state = initialState, action) => {
    switch (action.type) {

      case USER_LOADED:
          return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload
          };

      case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
              ...state,
              ...action.payload,
              isAuthenticated: true,
              isLoading: false
            };
            case LOGIN_FAIL:
                  localStorage.removeItem('token');
                  return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    isLoading: false,
                    user: null,
                    error: action.payload
                  };
  
      default:
        return state;
    }
  };