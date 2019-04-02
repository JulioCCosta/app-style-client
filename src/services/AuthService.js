
import {API_URI_LOGIN} from '../const';

import axios from 'axios';

 export function login(user){
  return axios.post(API_URI_LOGIN,user)
  
}