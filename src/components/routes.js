import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgetPassword from './auth/ForgetPassword';
import UserDashboard from './users/userDashboard'

import PrivateRoute from './routing/PrivateRoute'

const Routes = () => {
    return(
  
        <div className="">
        <Router>
            <Route exact path='/' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/forgetpassword' component={ForgetPassword}/>
            <PrivateRoute exact path='/user' component={UserDashboard}/>
        </Router>
      </div>

    )
}

export default Routes;