import React from 'react';

const TrackList = ({ data }) => {

  const tracks = data.map((track) => {
    return <li>{track['im:name'].label} by {track['im:artist'].label}</li>
  })

  return (
    <ol>{tracks}</ol>
  )

}

export default TrackList;