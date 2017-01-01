import React from 'react';

const Track = ({ track, disabled, onPlay }) => (
  <div key={track.id}
    className='track'>
    { track.name }
    <div className='track-buttons'>
      <button
        className='play-button'
        disabled={disabled}
        onClick={onPlay}>
        Play
      </button>
    </div>
  </div>
);

export default Track;
