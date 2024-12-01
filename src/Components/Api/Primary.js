
import axios from 'axios';

 const PrimaryAxios = axios.create({
    baseURL: 'https://laptop-shop-sarver.onrender.com/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default PrimaryAxios
