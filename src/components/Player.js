import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';

import '../resources/scss/player.scss'

export default function Player ({ srcUrl, pauseSongHandler, playSongHandler }) {
    return(
        <div>
            <ReactAudioPlayer
                src={srcUrl}
                controls
                autoPlay
                onPause={pauseSongHandler} 
                onPlay={playSongHandler}
            />
        </div>
    )
}

Player.propTypes = ({
    srcUrl: PropTypes.string.isRequired,
    isPause: PropTypes.bool.isRequired,
    pauseSongHandler: PropTypes.func.isRequired,
    playSongHandler: PropTypes.func.isRequired,
});
