import axios from 'axios'

const axiosDishes = axios.create({
    baseURL: 'https://homework-ernur.firebaseio.com/',
});
export default axiosDishes