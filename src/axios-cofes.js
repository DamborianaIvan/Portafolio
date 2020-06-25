import axios from 'axios';

const instance = axios.create({
    baseURL:'https://portfolioivandambo.firebaseio.com/'
})

export default instance;