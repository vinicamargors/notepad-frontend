import axios from 'axios' //faz a comunicação do frontend com o backend

const api = axios.create({
    baseURL: 'http://localhost:3333'//rota do backend
})

export default api;