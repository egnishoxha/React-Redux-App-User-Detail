import { LOAD_USERS } from '../constants/actionTypes';
import { UNLOAD_USERS } from '../constants/actionTypes';
import { LOAD_USER_DETAIL } from '../constants/actionTypes';
import { LOGIN_USER } from '../constants/actionTypes';
import { LOGOUT_USER } from '../constants/actionTypes';

import userService from '../../services/UserService';

export function login() {
    return {
        type: LOGIN_USER,
        payload: true
    }
}

export function logout() {
    return {
        type: LOGOUT_USER,
        payload: false
    }
}

export function loadUsers() {   
    const users = dispatch => {
        return userService.getUsers().then(response => {
            dispatch({
                type: LOAD_USERS,
                payload: response.data.results
            });
        })
        .catch(error => {
            console.log("ERROR loading users: ", error);
        });
    }
    return users;
}

export function unloadUsers() {
    return {
        type: UNLOAD_USERS,
        payload: []
    };
}

export function loadUserDetail(id) {
    return {
        type: LOAD_USER_DETAIL,
        payload: id
    };
}
