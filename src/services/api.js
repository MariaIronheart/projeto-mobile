import axios from "axios";

const api = axios.create({
    baseURL: 'https://backend-projeto-9sut.onrender.com/jogos',
});

export default api;