/* eslint-disable jsx-a11y/media-has-caption */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import msToMinutesAndSeconds from '../../../utils/msToMinutesAndSeconds';

const AudioPlayer = styled.audio`
    min-width: 150px;
    height: 50px;
    padding: 5px 0;
    margin-right: 20px;
    @media only screen and (max-width: 600px) {
        margin-bottom: 10px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
        margin-bottom: 20px;
        width: fit-content;
    }
    span {
        color: #999999;
    }
    p {
        color: #FAFAFA;
        margin-left: 8px;
        width: 50vw;
    }
    &:hover {
        background: rgba(0,0,0,0.5);
        border-radius: 8px;
    }
`;
const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Song = ({ info }) => (
  <Wrapper>
    {info.preview && (
    <AudioPlayer controls>
      <source src={info.preview} />
    </AudioPlayer>
    )}
    <TextWrapper>
      <span>{`${info.index}.`}</span>
      <p>{info.name}</p>
      <span>{`${msToMinutesAndSeconds(info.duration)}`}</span>
    </TextWrapper>
  </Wrapper>
);

Song.propTypes = {
  info: PropTypes.shape({
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    preview: PropTypes.string,
  }).isRequired,
};

export default memo(Song);
