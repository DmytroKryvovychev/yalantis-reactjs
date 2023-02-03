import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RadioButtons({ initialState, onChangeOption }) {
  const [checkedOption, setChecked] = useState(initialState);
  const handleOptionChange = (e) => {
    onChangeOption(+e.target.value);
    setChecked(+e.target.value);
  };

  return (
    <div className="radio_container">
      <div className="not_active">
        <label>
          <input type="radio" value="0" checked={!checkedOption} onChange={handleOptionChange} />
          not active
        </label>
      </div>
      <div className="active">
        <label>
          <input type="radio" value="1" checked={checkedOption} onChange={handleOptionChange} />
          active
        </label>
      </div>
    </div>
  );
}

RadioButtons.propTypes = {
  initialState: PropTypes.bool.isRequired,
  onChangeOption: PropTypes.func.isRequired,
};

export default RadioButtons;
