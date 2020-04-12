import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../Atoms/Logo/Logo';

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 100px;
    padding: 50px;
`;

const MainContainer = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Logo />
      {children}
    </Wrapper>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(MainContainer);
