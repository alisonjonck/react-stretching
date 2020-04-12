import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_SEARCH_PLACEHOLDER } from '../../../constants/labels';

const SearchInput = (props) => {
  const { name } = props;

  return (
    <input type="text" name={name} placeholder={INPUT_SEARCH_PLACEHOLDER} />
  );
};

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SearchInput;
