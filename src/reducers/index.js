import { combineReducers } from 'redux';
import LoginAuthentication from './loginAuthReducer';
import ChatBoxreducer from './chatBoxReducer';

export default combineReducers({
    loginAuth: LoginAuthentication,
    messageData: ChatBoxreducer,
});
