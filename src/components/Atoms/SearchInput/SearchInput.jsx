import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { INPUT_SEARCH_PLACEHOLDER } from '../../../constants/labels';

const SearchInput = (props) => {
  const { name, onChange } = props;

  return (
    <input type="text" onChange={onChange} name={name} placeholder={INPUT_SEARCH_PLACEHOLDER} />
  );
};

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(SearchInput);
