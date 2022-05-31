import Axios from 'axios'
import {BASE_URL} from '../main.js';

class AuthService{

    login(user){
        return Axios.post(BASE_URL + 'auth/get-token', user)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        })

    }

    validateToken(username, token){
        return Axios.post(BASE_URL + 'auth/validate-token', {
            "username": username,
            "token": token
        })
        .then(response => {
            return response;
        })
        .catch(error => {
            throw error;
        })
    }

}

export default new AuthService();