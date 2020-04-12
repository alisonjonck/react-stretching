import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../../Mols/AlbumCard';
import { RECENT_RESULTS_TITLE } from '../../../constants/labels';

const RecentResults = (props) => {
  const { recentResults } = props;

  if (!recentResults || !recentResults.length) {
    return null;
  }

  return (
    <section className="results">
      <h2>{RECENT_RESULTS_TITLE}</h2>
      <div className="results-container">
        {recentResults.map((a, i) => <AlbumCard key={`a.album-${i}`} info={a} />)}
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
