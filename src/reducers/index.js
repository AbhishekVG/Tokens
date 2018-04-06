import { combineReducers } from 'redux';
import SignUpReducer from './signupReducer';
import contactsFetchReducer from './contactsFetchReducer';

export const reducers = combineReducers({
    signUpData: SignUpReducer,
    userContactsList: contactsFetchReducer,
})