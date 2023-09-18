import axios from 'axios';

export default axios.create({
    baseURL:'https://f0ab-176-228-131-173.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});