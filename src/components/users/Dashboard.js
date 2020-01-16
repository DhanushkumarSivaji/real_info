/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getContacts, getUser } from '../../actions/contactAction';
import { loadUser, logout } from '../../actions/authAction';
import Header from './Header';
import UserList from './UserList';

const UserDashboard = ({
  user, contacts, getContacts, history, getUser, logout, isLoading,
}) => {
  useEffect(() => {
    loadUser();
    getContacts();

    // eslint-disable-next-line
  }, []);

  const Logout = () => {
    logout();
    history.push('/');
  };

  const DetailPage = (data) => {
    getUser(data);
    history.push('/userdetail');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header user={user} Logout={Logout} />
      <UserList contacts={contacts} DetailPage={DetailPage} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.login.user,
  contacts: state.contact.contacts,
  isLoading: state.login.isLoading,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    loadUser,
    getContacts,
    getUser,
    logout,
  }),
)(UserDashboard);
