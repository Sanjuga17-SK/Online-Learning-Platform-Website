import axios from 'axios';

// Automatically use local backend during development, and Render backend in production
const API_URL = import.meta.env.DEV
    ? 'http://localhost:5000/api'
    : 'https://online-learning-platform-website.onrender.com/api';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Crucial for sending/receiving secure HTTP-Only JWT Cookies
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
