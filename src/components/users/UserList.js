/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

const UserList = ({ contacts, DetailPage }) => (
  <div>
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
                  <th />
                </tr>
              </thead>
              <tbody>
                {contacts
                  && contacts.map((data, index) => (
                    <tr key={index.id}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.type}</td>
                      <td>
                        <button
                          onClick={() => DetailPage(data)}
                          className="btn btn-secondary"
                          type="button"
                        >
                          <i className="fas fa-angle-double-right" />
                          {' '}
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

UserList.propTypes = {
  contacts: PropTypes.isRequired,
  DetailPage: PropTypes.func.isRequired,
};

export default UserList;
