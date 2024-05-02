import axios from 'axios';
import {BaseUrlHeader} from '../../utility/Service';
import {Method} from '../../config';
const API = axios.create({
  timeout: 10000,
});

API.defaults.withCredentials = false;

API.interceptors.request.use(
  config => {
    config.headers = {...config.headers, ...BaseUrlHeader()};
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
API.interceptors.response.use(
  response => {
    
    return response;
  },
  ({message, response: {data, status}}) => {
    return Promise.reject({message, data, status});
  },
);

export const BaseUrlRequest = async (url, method = Method.GET, data) => {
  try {
    const response = await API[method](
      url,
      method === Method.GET ? {params: data} :data,
    );
    console.log("response in BaseUrlRequest", response)
    return response;
  } catch (error) {
    console.log('BaseUrlRequest catched : ', error);
    return error
  }
};
export default API;
