import {  USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_ALERT,
    REMOVE_ALERT
  } from './types';
import axios from 'axios';
import setAuthToken from '../components/utils/setAuthToken'
import store from '../store'

  // Load User
 export const loadUser = async ()  => {

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('http://localhost:5000/api/auth');

      store.dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
        store.dispatch({ type: AUTH_ERROR });
    }
  };

export const login =  formData => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }; 

      try {
        const res = await axios.post('http://localhost:5000/api/auth', formData, config);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });

        loadUser()



      } catch (error) {
        dispatch({
            type: LOGIN_FAIL
          });

        dispatch({
          type:SET_ALERT,
          payload: error.response.data.msg
        })

          setTimeout(()=>dispatch({type:REMOVE_ALERT}),3000);
      }
}


export const register = ({ name, email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  axios
    .post('http://localhost:5000/api/users', body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL
      }); 

    dispatch({
      type:SET_ALERT,
      payload: err.response.data.msg
    })

      setTimeout(()=>dispatch({type:REMOVE_ALERT}),3000);
    });
};