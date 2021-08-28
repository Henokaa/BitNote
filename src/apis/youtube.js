import axios from 'axios';
const KEY = 'AIzaSyBghIUeX30LpoNVm1ttrVUlABH-a6vHGpE'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})