import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/Contants';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGE,
        payload: email 
    }
}

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGE,
        payload: password
    }
}

const loginSuccess = (user, dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    })
    Actions.chat();    
}

const loginFailed = (err, dispatch) => {
    dispatch({
        type: LOGIN_FAILED,
        payload: err
    })
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_REQUEST});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSuccess(user, dispatch))
        .catch(err => loginFailed(err, dispatch))
    }
}