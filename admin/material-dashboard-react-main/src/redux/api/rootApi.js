import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({

    baseURL: 'http://localhost:3000/'
});

export default instance;