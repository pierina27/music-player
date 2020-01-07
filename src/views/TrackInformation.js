import React from 'react'
import '../resources/scss/trackInformation.scss'
import {textCover} from '../constants/playlist'

import PropTypes from 'prop-types';

export default function TrackInformation({name='Unvailable', artist='Unvailable', artistPageUrl='Unvailable', album='Unvailable'}) {
    return (
        <div className="trackInformation">
            <div className="cover">{textCover}</div>
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
