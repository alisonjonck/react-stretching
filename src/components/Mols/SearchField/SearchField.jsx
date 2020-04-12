/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from '../../Atoms/SearchInput/SearchInput';
import { INPUT_SEARCH_LABEL } from '../../../constants/labels';

import './SearchField.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SearchField = (props) => {
  const { onChange } = props;

  return (
    <Wrapper className="default-container">
      <label htmlFor="busca">
        {INPUT_SEARCH_LABEL}
      </label>
      <SearchInput onChange={onChange} name="busca" />
    </Wrapper>
  );
};

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(SearchField);
