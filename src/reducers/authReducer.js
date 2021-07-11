let initialState = { 
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    passwordError: "",
    emailError: "",
    usernameError: ""
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, username: action.payload }
        case "SET_PASSWORD":
            return { ...state, password: action.payload }
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        case "SET_CONFIRM_PASSWORD": 
            return { ...state, confirmPassword: action.payload}
        case "SET_PASSWORD_ERROR":
            return { ...state, passwordError: action.payload }
        case "SET_EMAIL_ERROR":
            return { ...state, emailError: action.payload }
        case "SET_USERNAME_ERROR":
            return { ...state, usernameError: action.payload };
        default:
            return state;
    }
}