import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/authAction";
import { Link } from "react-router-dom";
import Alert from './Alert'

const Login = ({ login, history, error, isAuthenticated, check }) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });


  useEffect(() => {
    if (isAuthenticated) {
      history.push("/user");
    }


    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password
      });

      setUser({...user,email:'',password:''})
    }
  };

  return (
    <section id="login">
      <div className="bg">
        <Alert/>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h4>Login</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-dark btn-block"
                    ></input>
                
                    <Link to="/forgetpassword">Forgot password?</Link>
                    <hr></hr>

                    <Link to="/register" className="btn btn-outline-primary btn-block">
                      Register
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
  error: state.login.error,
});

export default connect(mapStateToProps, { login })(Login);

// import React,{useEffect} from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { connect } from 'react-redux';
// import {login} from '../../actions/loginAction';
// import { Link, withRouter } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

// const ValidatedLoginForm = ({login}) => (

//   <Formik
//     initialValues={{ email: "", password: "" }}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         console.log("Logging in", values);
//         login(values)
//         setSubmitting(false);
//       }, 500);

//     }}
//     validationSchema={Yup.object().shape({
//       email: Yup.string()
//         .email()
//         .required("Required"),
//       password: Yup.string()
//         .required("No password provided.")
//         .min(8, "Password is too short - should be 8 chars minimum.")
//         .matches(/(?=.*[0-9])/, "Password must contain a number.")
//     })}
//   >
//     {props => {
//       const {
//         values,
//         touched,
//         errors,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit
//       } = props;
//       return (

//       );
//     }}
//   </Formik>
// );

// export default connect(null,{login})(ValidatedLoginForm);
