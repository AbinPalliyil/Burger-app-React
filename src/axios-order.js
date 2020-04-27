import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burgerapp-637b8.firebaseio.com/',
});

export default instance;
