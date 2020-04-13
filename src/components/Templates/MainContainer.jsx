import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../Atoms/Logo/Logo';

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    margin-top: 50px;
    margin-left: 5vw;
    margin-right: 5vw;
    padding: 2vw;

    @media only screen and (max-width: 600px) {
      margin-left: 1vw;
      margin-right: 1vw;
    }
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
