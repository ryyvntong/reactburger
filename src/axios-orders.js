import axios from 'axios';

const instance= axios.create({
    baseURL: 'https://react-burg-c1066.firebaseio.com/'
});

export default instance;