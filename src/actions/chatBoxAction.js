import { MESSAGES_SYNC, MESSAGE_SENT } from '../constants/Contants';
import firebase from 'firebase';

export const sendMessage = (message) => {
    message[0].createdAt= String(new Date());
    //this will be used later in updates
    firebase.database().ref(`/chats`)
    .push(message[0])
    .then(() => {
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
      console.log('failure');
    })
    return { type: MESSAGE_SENT }
}

export const syncMessages = () => {
    return (dispatch) => {
        firebase.database().ref(`/chats`)
        .on('value', snapshot => {
            dispatch({type: MESSAGES_SYNC, payload: snapshot.val()})
        })
    }
}