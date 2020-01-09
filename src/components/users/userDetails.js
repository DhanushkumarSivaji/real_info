import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const UserDetail = ({userData,history}) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        type: ""
      });

      
    useEffect(() => {
  
        if(!userData){
            history.push('/user')
        }else{
            setUser({
                ...user,
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                type: userData.type
              });
        }
        // eslint-disable-next-line
      }, []);

      const { name, email, phone, type } = user;

      const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div>
       
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="!#" className="btn btn-light btn-block">
                <i className="fas fa-arrow-left"></i> Back To Dashboard
              </a>
            </div>
            <div className="col-md-3">
              <a href="!#" className="btn btn-dark btn-block">
                <i className="fas fa-check"></i> Save
              </a>
            </div>
            <div className="col-md-3">
              <a href="!#" className="btn btn-danger btn-block">
                <i className="fas fa-trash"></i> Delete
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="details">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>Edit User</h4>
                </div>
                <div className="card-body">
                  <form>
                  <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="name"
                          name="name"
                          value={name}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
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
                        <label htmlFor="phone">Password</label>
                        <input
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="type">Confirm Password</label>
                        <input
                          type="text"
                          name="type"
                          value={type}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
                    <div className="form-group">
                      <label htmlFor="category">License</label>
                      <select className="form-control">
                        <option value="">State Level</option>
                        <option value="">District Level</option>
                        <option value="">Area Level</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
    userData: state.contact.user
  });

export default compose(withRouter,connect(mapStateToProps, {  }))(
    UserDetail
  );;
