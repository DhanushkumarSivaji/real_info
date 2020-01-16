import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';

import {
  LOGIN_HEADER,
  EMAIL_FIELD_TEXT,
  PASSWORD_FIELD_TEXT,
  FORGET_PASSWORD_LINK_TEXT,
  LOGIN_BUTTON_TEXT,
  REGISTER_BUTTON_TEXT,
} from './Constants';
import Alert from './Alert';

const Login = ({
  login, history, error, isAuthenticated,
}) => {
  const [user, setUser] = useState({
    email: 'dhanushkumarstudy@gmail.com',
    password: '123456',
  });

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/user');
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, history, login]);

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });

      setUser({ ...user, email: '', password: '' });
    }
  };

  return (
    <section id="login">
      <div className="bg">
        <Alert />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h4>{LOGIN_HEADER}</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">{EMAIL_FIELD_TEXT}</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">{PASSWORD_FIELD_TEXT}</label>
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
                      value={LOGIN_BUTTON_TEXT}
                      className="btn btn-dark btn-block"
                    />

                    <Link to="/forgetpassword">{FORGET_PASSWORD_LINK_TEXT}</Link>
                    <hr />

                    <Link to="/register" className="btn btn-outline-primary btn-block">
                      {REGISTER_BUTTON_TEXT}
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  history: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  error: state.login.error,
});

export default connect(mapStateToProps, { login })(Login);
