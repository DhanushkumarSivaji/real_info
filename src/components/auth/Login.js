import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import {login} from '../../actions/loginAction';
import { Link, withRouter } from "react-router-dom";
const ValidatedLoginForm = ({login}) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        login(values)
        setSubmitting(false);
      }, 500);

      
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <section id="login">
          <div className="bg">
            <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header">
                    <h4>Login</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
                          type="text"
                          placeholder="Enter your email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-control ${errors.email &&
                            touched.email &&
                            "is-invalid"}`}
                        />
                        {errors.email && touched.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Password</label>
                        <input
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`form-control ${errors.password &&
                            touched.password &&
                            "is-invalid"}`}
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-success btn-block"
                        disabled={isSubmitting}
                      ></input>
                      <a href="#" id="forgot_pswd">Forgot password?</a>
                      <hr></hr>
                      <Link  to="/"><button className="btn btn-primary btn-block">Register</button></Link>
                    </form>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      );
    }}
  </Formik>
);

export default connect(null,{login})(ValidatedLoginForm);
