import axios from 'axios';
import { playlistEndpoint } from '../constants/playlist';

const getPlayList = async () => {
    return await axios.get(playlistEndpoint)
}

export { getPlayList }