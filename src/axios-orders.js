import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-fef79.firebaseio.com/'
});

export default instance;