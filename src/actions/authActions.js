import {  addUserToDatabase, checkUsername } from "../api/firebaseMethods";

export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_USERNAME_ERROR =  'SET_USERNAME_ERROR';
export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD'; 


export const setEmail = (data) => {    
    return {
        type: SET_EMAIL,
        payload: data
    }
}

export const setPassword = (data) => { 
    return {
        type: SET_PASSWORD,
        payload: data
    }
}

export const setUsername = (data) => { 
    return {
        type: SET_USERNAME,
        payload: data
    }
}

export const setConfirmPassword = (data) => {
    return  {
        type: SET_CONFIRM_PASSWORD,
        payload: data
    }
}


export const setUsernameError = (data) => {
    return {
        type: SET_USERNAME_ERROR,
        payload: data
    }
}


export const setPasswordError = (data) => { 
    return {
        type: SET_PASSWORD_ERROR,
        payload: data
    }
}

export const setEmailError = (data) => { 
    return {
        type: SET_EMAIL_ERROR,
        payload: data
    }
}


export const usernameAvailable = (username) => { 
    return async function(dispatch, getState) {
        return checkUsername(username)
    }
}

export const addUserToDB = (username,email) => { 
    return async function(dispatch, getState) {
        await addUserToDatabase(username,email);

    }
}

