import axios from 'axios';

// membuat instance axios 
const api = axios.create({
  // baseURL: 'https://moviesdatabase.p.rapidapi.com',
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
});

// di export supaya dapat diakses di file lain
export default api;

// axios untuk berinteraksi dengan API nya.
// axios adalah tools untuk mengambil data dari API