/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getFeedbacksFromDB, lookupUser } from '../actions/profileActions';
import "./styles/profileStyles.css"
export const Profile = () => {
    const {email} = useSelector(state => state.auth);
    const {username,feedbacks} = useSelector(state => state.profile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(lookupUser(email))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[] )

    useEffect(() => {
        dispatch(getFeedbacksFromDB(username))
    },[username])
    return (
        <div className="container2">
            <div className="header">
                <img src = "avatar.png" alt = "user" className="avatar"/>
                <h1>{username}</h1>
            </div>
            <div className="content">
                {
                    feedbacks.map((feedback,index) => { 
                        return (
                            <div key={index} className = "feedback">
                                <h2>{feedback.feedback}</h2>
                                <p>Date: {feedback.date && feedback.date.toDate().toLocaleDateString()}</p>
                            </div>
                        )
                    })
                }
            </div>
                    
        </div>
    )
}
