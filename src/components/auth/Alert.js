import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Alert = ({ error }) => {
  const [name, setName] = useState(" ");

  useEffect(() => {
    if (error) {
      setName(error);
    } else {
      setName("");
    }

    // eslint-disable-next-line
  }, [error]);
  return <div>{name && <div>{name}</div>}</div>;
};

const mapStateToProps = state => ({
  error: state.login.error
});

export default connect(mapStateToProps, null)(Alert);
