import firebase from "../firebaseConfig";

export const checkUsername = async (username) => { 
    return firebase
            .firestore()
            .collection('users')
            .where('username','==',username)
            .get()
            .then(querySnapshot => {
                if(querySnapshot.size === 0){
                    return true;
                }else{
                    return false;
                }
            })
}

export const addUserToDatabase = (username,email) => { 
    return firebase
            .firestore()
            .collection('users')
            .add({username,email,date: new Date()})
}

export const getUsernameFromDatatbase = (email) => { 
    return firebase
            .firestore()
            .collection('users')
            .where('email','==',email)
            .get()
            .then(querySnapshot => {
                if(querySnapshot.size === 0){
                    return false;
                }else{
                    return querySnapshot.docs[0].data().username;
                }
            })
}

export const getFeedbacksFromDatabase = (username) => {
    return firebase
            .firestore()
            .collection('feedbacks')
            .where('username','==',username)
            .get()
            .then(querySnapshot => {
                return querySnapshot.docs;
            })
}

export const addFeedbackToDatabase = (username,feedback) => {   
    return firebase
            .firestore()
            .collection('feedbacks')
            .add({username,feedback,date: new Date()})
}