import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { setEmail, setEmailError, setPassword, setPasswordError } from '../actions/authActions';
import firebase from '../firebaseConfig';

export const Login = () => {

    const { email, password, emailError, passwordError } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const clearError = () => {
        dispatch(setEmailError(""))
        dispatch(setPasswordError(""))
    }


    const handleLogin = () => {
        clearError();
        let error = false;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                error = true;
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        dispatch(setEmailError(err.message));
                        break;
                    case "auth/wrong-password":
                        dispatch(setPasswordError(err.message));
                        break;
                    default:
                        break;
                }
            }).finally(() => { 
                
                if(!error){
                    console.log("success is wonderful")
                    history.push("/profile")
                }
            })



    }
return (

    <div className="login">

        <div className="loginContainer">
            <h2 className="welcome">Welcome To The Feedback Hub </h2>
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

            <div className="btnContainer">


                <button className="button" onClick={handleLogin}>Sign In</button>
                <p>Don't have an account ? <span onClick={() => { history.push("/signup") }} >Sign up</span></p>



            </div>

        </div>

    </div>
)

}
