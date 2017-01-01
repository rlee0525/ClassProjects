import React from 'react';
import Track from './track';

const Jukebox = ({ tracks, isRecording, isPlaying, onPlay }) => (
  <div className='jukebox'>
    <div className='jukebox-title'>
      <h1>Jukebox</h1>
    </div>

    <div className='tracks-list'>
      {Object.keys(tracks).map(id => (
        <Track key={id}
          track={tracks[id]}
          disabled={isRecording || isPlaying}
          onPlay={onPlay(tracks[id])}/>
      ))}
    </div>
  </div>
);

export default Jukebox;
