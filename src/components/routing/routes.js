import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import UserDashboard from '../users/Dashboard';
import UserDetail from '../users/UserDetail';
import PrivateRoute from './PrivateRoute';
import ForgetPassword from '../auth/ForgetPassword';
import NotFound from '../errorPage';

const Routes = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgetpassword" component={ForgetPassword} />
        <PrivateRoute exact path="/user" component={UserDashboard} />
        <PrivateRoute exact path="/userdetail" component={UserDetail} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
