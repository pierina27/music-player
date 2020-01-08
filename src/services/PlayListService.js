import axios from 'axios';
import { playlistEndpoint } from '../constants/playlist';

export default async () => {
    return axios.get(playlistEndpoint)
}
