import React from 'react'
import TrackInformation from './TrackInformation'
import '../resources/scss/songDetail.scss'

export default function SongDetail(props={location:{state:null}}){
    const {user_name: name, user_real_name: artist, upload_name: album, artist_page_url: artistPageUrl} = props && props.location && props.location.state ? JSON.parse(props.location.state) : {}
    const trackInformation = {name, artist, album, artistPageUrl}

    return (
        <div className="player">
                <TrackInformation {...trackInformation}></TrackInformation>
        </div>
    )
}