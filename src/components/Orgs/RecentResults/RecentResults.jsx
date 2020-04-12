import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../../Mols/AlbumCard';
import { RECENT_RESULTS_TITLE } from '../../../constants/labels';

const RecentResults = (props) => {
  const { recentResults } = props;

  return (
    <section className="results">
      <h2>{RECENT_RESULTS_TITLE}</h2>
      <div className="results-container">
        {recentResults && recentResults.map((a) => <AlbumCard key={a.album} info={a} />)}
      </div>
    </section>
  );
};

RecentResults.propTypes = {
  recentResults: PropTypes.arrayOf(PropTypes.shape({
    album: PropTypes.string,
    artist: PropTypes.string,
  })),
};

RecentResults.defaultProps = {
  recentResults: undefined,
};

export default memo(RecentResults);