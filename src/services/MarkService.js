import Axios from 'axios'
import {BASE_URL} from '../main.js';

class MarkService{ 
    getReceivedMarksForUser(userid, token){
        return Axios.get(BASE_URL + 'mark/receivedmarks/' + userid, {
            headers:{
                "Authorization" : "Bearer " + token
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        })
    }

    getGivenMarksForUser(userid, token){
        return Axios.get(BASE_URL + 'mark/givenmarks/' + userid, {
            headers:{
                "Authorization" : "Bearer " + token
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            throw error;
        })
    }

}

export default new MarkService();