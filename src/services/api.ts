import axios from 'axios'
//URL DA API: https://api.themoviedb.org/3/
// ROTA DA API: /movie/now_playing?api_key=84932e9c944ef8b57e5cff1ea6cf3590
export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
