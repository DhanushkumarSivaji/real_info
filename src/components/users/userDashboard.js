import React,{ useEffect } from 'react';
import {loadUser} from '../../actions/loginAction';
import { connect } from 'react-redux';
 const  UserDashboard =({user,error,loadUser}) => {

    useEffect( () => {
     

        if(user){
            console.log("user",user)
        }
        // eslint-disable-next-line
      }, [user,error]);


    return (
        <div>
                userDashboard
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.login.user,
    error: state.error
  });

export default connect(mapStateToProps,{loadUser})(UserDashboard);