import axios from 'axios';

export default class UserService {
    static getUsers(){
        return axios.get('https://randomuser.me/api?results=20');
    }
}