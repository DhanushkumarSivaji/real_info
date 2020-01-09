import {GET_CONTACTS,GET_USER} from "../actions/types";
  
const initialState = {
    contacts:null,
    user:null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_CONTACTS:
          return{
              ...state,
              contacts:action.payload
          }
      case GET_USER:
          return{
              ...state,
              user:action.payload
          }
      default:
        return state;
    }
  };
  