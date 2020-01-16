import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authAction';
import {
  REGISTER_HEADER,
  NAME_FIELD_TEXT,
  EMAIL_FIELD_TEXT,
  PASSWORD_FIELD_TEXT,
  CONFIRM_PASSWORD_FIELD_TEXT,
  REGISTER_BUTTON_TEXT,
} from './Constants';

const Register = ({ register, isRegistered, history }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (isRegistered) {
      history.push('/');
    }

    // eslint-disable-next-line
  }, [isRegistered, history]);

  const {
    name, email, password, confirmPassword,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all fields', 'danger');
    } else if (password !== confirmPassword) {
      alert('password mismatch');
    } else {
      register({
        name,
        email,
        password,
      });
    }

    setUser({
      ...user,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div>
      <section id="register">
        <div className="bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header">
                    <h4>{REGISTER_HEADER}</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">{NAME_FIELD_TEXT}</label>
                        <input
                          type="name"
                          name="name"
                          value={name}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">{EMAIL_FIELD_TEXT}</label>
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
                      <div className="form-group">
                        <label htmlFor="password">{CONFIRM_PASSWORD_FIELD_TEXT}</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
                      <input
                        type="submit"
                        value={REGISTER_BUTTON_TEXT}
                        className="btn btn-dark btn-block"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isRegistered: PropTypes.bool.isRequired,
  history: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  isRegistered: state.login.isRegistered,
});

export default connect(mapStateToProps, { register })(Register);
