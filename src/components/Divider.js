import React from 'react';
import PropTypes from 'prop-types';

function Divider({ width, color }) {
  return <div style={{ borderLeft: `${width}px solid ${color}`, width: width }}></div>;
}

Divider.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Divider;
