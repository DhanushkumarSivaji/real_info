import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ error }) => {
  const [name, setName] = useState(' ');

  useEffect(() => {
    if (error) {
      setName(error);
    } else {
      setName('');
    }

    // eslint-disable-next-line
  }, [error]);
  return <div>{name && <div>{name}</div>}</div>;
};

Alert.propTypes = {
  error: PropTypes.string,
};

Alert.defaultProps = {
  error: 'Default error',
};

const mapStateToProps = (state) => ({
  error: state.login.error,
});

export default connect(mapStateToProps, null)(Alert);
