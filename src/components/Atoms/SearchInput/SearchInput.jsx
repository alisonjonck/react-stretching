import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  const { name } = props;

  return (
    <input type="text" name={name} placeholder="Comece a escrever..." />
  );
};

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SearchInput;
