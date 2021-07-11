import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserToDB, setConfirmPassword, setEmail, setEmailError, setPassword, setPasswordError, setUsername, setUsernameError, usernameAvailable } from '../actions/authActions'
import "./styles/LoginStyle.css"
import firebase from '../firebaseConfig'
import { useHistory } from 'react-router-dom'
export const Signup = () => {
    const { email, username, password, emailError, passwordError, confirmPassword, usernameError } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const history = useHistory();

    const clearErrors = () => { 
        dispatch(setEmailError(''))
        dispatch(setUsernameError(''))
        dispatch(setPasswordError(''))
        
    }
    
    
    const handleSignup = async (e) => {
        clearErrors();
        let error = false;
        let available = await dispatch(usernameAvailable(username));
        if(!available) {
            dispatch(setUsernameError("Username already taken"));
            error = true;
            return;
        }

        if(password !== confirmPassword){
            dispatch(setPasswordError("Passwords do not match"));
            error = true;
            return;
        }
       
        e.preventDefault();
       
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        dispatch(setEmailError(err.message));
                        error = true;
                        break;
                    case "auth/weak-password":
                        dispatch(setPasswordError(err.message));
                        error = true;
                        break;
                    default:
                        return;
                }
            }).finally(() => { 
                if (!error) {
                    dispatch(addUserToDB(username,email))
                    history.push("/login")
                }
                
                
            })

    }

    return (
        <div className="login">

            <div className="loginContainer">
                <h2 className="welcome">Welcome To The Feedback Hub </h2>
                <label>Username</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => dispatch(setUsername(e.target.value))}


                />
                <p className="errorMsg">{usernameError}</p>
                <label>Email</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}


                />
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={e => dispatch(setPassword(e.target.value))}
                />
                <p className="passwordMsg">{passwordError}</p>

                <label>Confirm Password</label>
                <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={e => dispatch(setConfirmPassword(e.target.value))}
                />
                 <p className="passwordMsg">{passwordError}</p>
                <div className="btnContainer">


                    <button className="button" onClick={handleSignup}>Sign Up</button>
                    {/* <p>Don't have an account ? <span onClick={() => { history.push("/signup") }} >Sign up</span></p> */}



                </div>

            </div>

        </div>
    )
}
