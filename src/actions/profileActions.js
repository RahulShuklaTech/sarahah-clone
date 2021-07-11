import { addFeedbackToDatabase, getFeedbacksFromDatabase, getUsernameFromDatatbase } from "../api/firebaseMethods"

export const SET_PROFILE_USERNAME = 'SET_PROFILE_USERNAME'
export const SET_PROFILE_EMAIL = 'SET_PROFILE_EMAIL'
export const SET_FEEDBACKS = 'SET_FEEDBACKS'
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const setProfileUsername = (data) => {
    return {
        type: SET_PROFILE_USERNAME,
        payload: data
    }
}

export const setFeedbacks = (data) => {
    return {
        type: SET_FEEDBACKS,
        payload: data
    }
}


export const toggleLoading = (data) => {
    return {
        type: TOGGLE_LOADING,
        payload: data
    }
}



export const lookupUser =  (email) => { 
    return async(dispatch, getState) => {
        let username =  await getUsernameFromDatatbase(email);
        console.log("name", username)
        dispatch(setProfileUsername(username));
    }
}

export const getFeedbacksFromDB = (username) => {
    return async(dispatch, getState) => {
        let data = await getFeedbacksFromDatabase(username);
        
        let result = [];
        data.forEach(element => {
            let obj = element.data();
            obj.id = element.id;
            result.push(obj)
        })
        dispatch(setFeedbacks(result));
        console.log(result,"result is here")
    }
}


export const addFeedback = (username,feedback) => { 
    return async(dispatch, getState) => {
        await addFeedbackToDatabase(username,feedback);
    }
}