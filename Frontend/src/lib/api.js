import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Maps explicitly to the User's Node Express endpoint
    withCredentials: true, // Crucial for sending/receiving secure HTTP-Only JWT Cookies
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
