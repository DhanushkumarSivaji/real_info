import { SET_ALERT,REMOVE_ALERT } from './types';
import axios from 'axios';
import store from '../store';
import uuid from 'uuid';



export const setAlert =  (msg,type) => async dispatch => {
    
    const id = uuid.v4();
    dispatch({
        type:SET_ALERT,
        payload:{msg,type,id}
    })

    setTimeout(()=>dispatch({type:REMOVE_ALERT,payload:id}),10000);
}