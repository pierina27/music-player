import React from 'react'
import TrackInformation from '../views/TrackInformation'
import '../resources/scss/songDetail.scss'

export default function SongDetail(props){
    const {user_name, user_real_name, upload_name, artist_page_url} = JSON.parse(props.location.state)
    const trackInformation = {name: user_name, artist: user_real_name, albun:upload_name, artistPageUrl:artist_page_url}
    return (
        <div className="player">
                <TrackInformation {...trackInformation}></TrackInformation>
        </div>
    )
}