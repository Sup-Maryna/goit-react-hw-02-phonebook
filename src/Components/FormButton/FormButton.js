import React from 'react';
import css from './FormButton.module.css';
import PropTypes from 'prop-types';

const FormButton = ({ type = 'button', disabled = false, onClick, label }) => {
  return (
    <button
      className={css.formBtn}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FormButton;

FormButton.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
};
