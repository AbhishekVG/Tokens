import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, AUTHENTICATION_ERROR } from '../constants/Contants';

const INITIAL_STATE = {
    email: '',
    password: '',
    loader: false,
    error: '',
    user: ''
}

const LoginAuthentication = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGE:
            return {...state, email: action.payload}
        case PASSWORD_CHANGE:
            return {...state, password: action.payload}
        case LOGIN_REQUEST:
            return {...state, loader: true}
        case LOGIN_SUCCESS:
            return {...state, loader: false, user: action.payload}
        case LOGIN_FAILED:
            return {...state, loader: false, error: AUTHENTICATION_ERROR}
        default:
            return state;
    }
}

export default LoginAuthentication;