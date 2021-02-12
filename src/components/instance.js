import axios from 'axios';
export default axios.create({
    baseURL: 'https://vaiga-3ee5b-default-rtdb.firebaseio.com'
})