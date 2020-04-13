/* eslint-disable jsx-a11y/media-has-caption */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import msToMinutesAndSeconds from '../../../utils/msToMinutesAndSeconds';

const AudioPlayer = styled.audio`
    width: 150px;
    height: 50px;
    padding: 5px 0;
    margin-right: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
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

const Song = ({ info }) => (
  <Wrapper>
    {info.preview && (
    <AudioPlayer controls>
      <source src={info.preview} />
    </AudioPlayer>
    )}
    <span>{`${info.index}.`}</span>
    <p>{info.name}</p>
    <span>{`${msToMinutesAndSeconds(info.duration)}`}</span>
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
