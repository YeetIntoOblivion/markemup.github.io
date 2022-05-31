
import {BASE_URL} from '../main.js';
import axios from 'axios';

class StatusService{
    checkStatus(){

        return axios.get(BASE_URL + 'status/checkonline', {
                timeout: 5000
            })
            .then(response => {
                return response;
            })
            .catch(error => {
               throw error;
            });  
        }
    }


export default new StatusService();
