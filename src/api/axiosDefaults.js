import axios from 'axios'

axios.defaults.baseURL = 'https://momentsefi2-1ca9a1e4edd0.herokuapp.com/'
axios.defaults.headers['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true