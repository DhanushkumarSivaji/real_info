import React, { useState } from "react";

const ForgetPassword = () => {
  const [user, setUser] = useState({
    email: ""
  });

  const { email } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "") {
      alert("Please fill in all fields", "danger");
    } else {
      alert(email);
    }
    setUser({ ...user, email: "" });
  };
  return (
    <div>
      <section id="forgetPassword">
        <div className="bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-header">
                    <h4>Forget Password</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Enter Email</label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={onChange}
                          className="form-control"
                        />
                      </div>
                      <input
                        type="submit"
                        value="Reset Password"
                        className="btn btn-dark btn-block"
                      ></input>
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

export default ForgetPassword;
