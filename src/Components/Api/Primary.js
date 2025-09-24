
import axios from 'axios';

 const PrimaryAxios = axios.create({
    baseURL: 'https://laptop-shop-sarver.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default PrimaryAxios
