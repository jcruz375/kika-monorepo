import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('AuthToken'),
    },
});

export default api;