import React from 'react'
import '../resources/scss/trackInformation.scss'

import PropTypes from 'prop-types';

export default function TrackInformation({name, artist, artistPageUrl, album}) {
    return (
        <div className="trackInformation">
            <div className="cover">Cover</div>
            <div className="name">{name}</div>
            <div className="artist">{artist}</div>
            <div className="album">{album} ({artistPageUrl})</div>
        </div>
    )
}

TrackInformation.propTypes = ({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    artistPageUrl: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
});
