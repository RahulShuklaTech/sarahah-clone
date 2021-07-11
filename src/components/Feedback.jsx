import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { addFeedback, toggleLoading } from '../actions/profileActions';
import { checkUsername } from '../api/firebaseMethods';

export const Feedback = () => {
    let {username} = useParams();

    const dispatch = useDispatch();
    const feedback = useRef("");
    const {loading} = useSelector(state => state.profile);
    const history = useHistory();
    const handleSubmit = async () => { 
        const feedbackText = feedback.current.value;
        if (feedbackText.length > 0) {
            await dispatch(addFeedback(username,feedbackText));
            feedback.current.value = "";
        }

    }

    useEffect(() => {
        async function check(){
            let result = await checkUsername(username);
            if(result){
                dispatch(toggleLoading(false));
               alert("Username not found");
                history.push("/")
                return 
            }else{
                
                dispatch(toggleLoading(false))
            }
        }
        check();
    }, [])



    
    if(loading) {
        
         
        return <div>Loading...</div>;
    }
    


    return (
        <div className="container">
            <div className="header">
                <img src="avatar.png" alt="user" className="avatar" />
                <h1>{username}</h1>
            </div>
            <div className="content">
                <textarea className="textarea" ref= {feedback}placeholder="Feedback" />
                <button onClick = {handleSubmit}>Send</button>
            </div>  
        </div>
    )
}
