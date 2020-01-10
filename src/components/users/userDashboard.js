import React, { useEffect } from "react";
import { loadUser, logout } from "../../actions/authAction";
import { getContacts, getUser } from "../../actions/contactAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const UserDashboard = ({
  user,
  error,
  contacts,
  getContacts,
  history,
  getUser,
  logout
}) => {
  useEffect(() => {
    loadUser();
    getContacts();

    // eslint-disable-next-line
  }, []);

  const Logout = () => {
    logout();
    history.push("/");
  };

  const DetailPage = data => {
    getUser(data);
    history.push("/userdetails");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
        <div className="container">
          <a href="" className="navbar-brand">
            User Dashboard
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown mr-3">
                <a href="" className="nav-link ">
                  <i className="fas fa-user"></i> {user && user.name}
                </a>
              </li>
              <li className="nav-item">
                <a href="" onClick={Logout} className="nav-link">
                  <i className="fas fa-user-times"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table  table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Prof.Type</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {contacts &&
                    contacts.map((data, index) => (
                      <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.type}</td>
                        <td>
                          <button
                            onClick={e => DetailPage(data)}
                            className="btn btn-secondary"
                          >
                            <i className="fas fa-angle-double-right"></i>{" "}
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.login.user,
  contacts: state.contact.contacts
});

export default compose(
  withRouter,
  connect(mapStateToProps, { loadUser, getContacts, getUser, logout })
)(UserDashboard);
