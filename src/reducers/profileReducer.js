const initialState = {
    username: "",
    email: "",
    feedbacks: [],
    loading: true,
}



export default function profileReducer(state = initialState, action) { 
    switch(action.type) {
        case "SET_PROFILE_USERNAME":
            return {...state, username: action.payload}
        case "SET_FEEDBACKS": 
            return {...state, feedbacks: action.payload}
        case "TOGGLE_LOADING": 
            return {...state, loading: action.payload}

        default:
            return state
    }
}