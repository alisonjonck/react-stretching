/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import SearchInput from '../../Atoms/SearchInput';

import './SearchField.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default () => (
  <Wrapper className="default-container">
    <label htmlFor="busca">
      Busque por artistas, álbums ou músicas
    </label>
    <SearchInput name="busca" />
  </Wrapper>
);
