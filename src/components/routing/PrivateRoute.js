import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isAuthenticated} from './index' 

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(isAuthenticated())
  return (
     
    <Route {...rest} render={props => isAuthenticated()?(<Component/>):(<Redirect to={{pathname:'/',state:{from:props.location}}}/>)}/>
  );
};

export default PrivateRoute;