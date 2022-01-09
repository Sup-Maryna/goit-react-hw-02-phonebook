import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
