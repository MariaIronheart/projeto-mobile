import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-projeto-9sut.onrender.com',
    timeout: 50000
});

export default api;