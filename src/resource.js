
import {API_URI} from "./const";
import axios from 'axios'
axios.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('access_token')}`;

const index = function (resource) {
	return axios.get(API_URI + '/' + resource)
		.then(result => { return result.data; })
		.catch(error => { return Promise.reject(error); })
}

const action = function (resource, data = {}) {
	return axios.post(API_URI + '/' + resource , data)
		.then(result => { return result.data; })
		.catch(error => { return Promise.reject(error); })
}

export default {
	index,
	action
}
