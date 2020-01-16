/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-tabs */
import React from 'react';

const Header = ({ user, Logout }) => (
  <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
      <div className="container">
        <a href="" className="navbar-brand">
          User Dashboard
        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown mr-3">
              <a href="" className="nav-link ">
                <i className="fas fa-user" />
                {' '}
                {user && user.name}
              </a>
            </li>
            <li className="nav-item">
              <a href="" onClick={Logout} className="nav-link">
                <i className="fas fa-user-times" />
                {' '}
Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
