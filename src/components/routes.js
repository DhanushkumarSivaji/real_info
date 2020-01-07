import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'

const Routes = () => {
    return(
  
        <div className="">
        <Router>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
        </Router>
      </div>

    )
}

export default Routes;