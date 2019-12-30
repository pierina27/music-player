import React  from "react";
import {withRouter} from 'react-router-dom'
import PlayList from '../containers/PlayList'


 function MusicPlayer(){
    return(
        <PlayList></PlayList>
    )
}

export default withRouter(MusicPlayer)