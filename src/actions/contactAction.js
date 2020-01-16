import axios from 'axios';
import { GET_CONTACTS, GET_USER, SET_LOADING } from './types';

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

// Load User
export const getContacts = () => async (dispatch) => {
  try {
    setLoading();
    console.log('hello');
    const res = await axios.get('http://localhost:5000/api/contacts');
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = (userData) => (dispatch) => {
  setLoading();

  dispatch({
    type: GET_USER,
    payload: userData,
  });
};
