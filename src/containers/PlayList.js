import React, { useEffect, useState } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DiscFullIcon from '@material-ui/icons/DiscFull';
import PauseIcon from '@material-ui/icons/Pause';
import {withRouter} from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Player from '../components/Player'
import Loading from '../components/Loading';
import getPlayList from '../services/PlayListService'
import '../resources/scss/playlist.scss'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#58FFC1'
      },
    secondary: {
        main: '#D557FF'
      }
    }
  });

function PlayListComponent({history}){
    const [playlist, setPlaylist] = useState([])
    const [srcUrl, setPlay] = useState("")
    const [idPlaying, setIdPlaying] = useState(0)
    const [isLoading, setLoading] = useState(0)
    const [message, setMessage] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)

    const playSongHandler = ({download_url, upload_id} = {}) => (e) => {
        e.preventDefault()
        console.log(download_url, upload_id)
        download_url && setPlay(download_url)
        upload_id && setIdPlaying(+upload_id)
        setIsPlaying(true)
    }

    const pauseSongHandler = (e) => {
        document.querySelector('audio').pause()
        setIsPlaying(false)
    }

    const goToDetail = (i) => () => {
        history.push('/detail', JSON.stringify(i))
    }

    
    useEffect(() => {
        async function getPlaylistFromService(){
            setLoading(true)
            setMessage('Loading the wonderful music...')
            try{
                const {data} = await getPlayList()
                setPlaylist(data[0].items)
                setMessage('')
            } catch(e){
                setMessage('Sorry connection error..')
                setPlaylist([])
            }
            
            setLoading(false)
       }
    
       getPlaylistFromService()
      }, [])
    
      return(
        <MuiThemeProvider theme={theme}>
            <div className="playlist">
                <List component="nav" aria-label="main mailbox folders" id="music-list" >
                    {playlist.map((i, index) => (
                        <ListItem key={index} button onClick={idPlaying !== +i.upload_id ? playSongHandler(i) : pauseSongHandler}>
                        <ListItemIcon>
                    { idPlaying === +i.upload_id && isPlaying ? <PauseIcon color="primary" /> : <PlayArrowIcon color="secondary"/> }
                        </ListItemIcon>
                        <ListItemText primary={i.upload_name} secondary={i.user_real_name}/>
                        <ListItemIcon onClick={goToDetail(i)} >
                            <DiscFullIcon color="secondary"/>
                        </ListItemIcon>
                    </ListItem>
                    ))}
                </List>
                {(isLoading || message) && <Loading isLoading={isLoading} message={message}/>}
            </div>
            <Player srcUrl={srcUrl} pauseSongHandler={pauseSongHandler} playSongHandler={playSongHandler()}></Player>
        </MuiThemeProvider>
      )
}



export default withRouter(PlayListComponent)