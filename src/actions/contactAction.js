import { GET_CONTACTS, GET_USER } from "./types";
import axios from "axios";

// Load User
export const getContacts = () => async dispatch => {
  try {
    const res = await axios.get("http://10.200.2.191:5000/api/contacts");
    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = userData => dispatch => {
  dispatch({
    type: GET_USER,
    payload: userData
  });
};
