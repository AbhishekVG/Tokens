import { combineReducers } from 'redux';
import SignUpReducer from './signupReducer';

export const reducers = combineReducers({
    signUpData: SignUpReducer
})