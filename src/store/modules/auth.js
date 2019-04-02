import axios from 'axios';

import {login} from '../../services/AuthService'
import {
 
    API_URI_LOGIN
  } from '../../const';
 
export default {
 
    state : {
        token: localStorage.getItem('access_token') || '',
        status: '',
        storage:'',
 
      },
   
       getters :{
        isAuthenticated (state)
        {
            return !!state.token
        },
     
        authStatus(state){
           return  state.status
         }
      },
 
      mutations:{
        AUTH_REQUEST(state){
          state.status = 'loading';
        },
        AUTH_LOGOUT(state) {
          state.status = 'logout';
        },
        AUTH_SUCCESS(state, token) {
          state.status = 'success';
          state.token = token
          state.storage = token
        },
        AUTH_ERROR (state) {
          state.status = 'error';
        },
      },
 
 
     actions :{
			login(context,user) {

				context.commit('AUTH_REQUEST')
			   return login(user)
					.then(response => {
					  const token = response.data.access_token;
					  localStorage.setItem('access_token',token)
            context.commit('AUTH_SUCCESS',  token)
            
					
					})
				.catch(err => {
				  context.commit('AUTH_ERROR', err);
				  localStorage.removeItem('access_token') ;
				})
		  },
      logout(context)
      {
        return new Promise((resolve, reject) => {
          context.commit('AUTH_LOGOUT')
          localStorage.removeItem('access_token');
          resolve()
        })
      }
    }
}