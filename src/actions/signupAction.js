import { AsyncStorage } from 'react-native'
import firebase from 'firebase';

export const signUp = (mobileNumber) => {
    return (dispatch) => {
        onSignupRequest(dispatch);
        const userList = firebase.database().ref('/tokens/users');
        userList.on('value', function (snapshot) {
            userList.off('value');
            const list = snapshot.val();
            console.log('list', list);
            const numberList = Object.values(list);
            console.log('numberList', numberList);
            const isDuplicate = numberList.find(num =>
                formatNumber(num) === formatNumber(mobileNumber)
            )
            console.log('isDuplicate', isDuplicate);
            if (isDuplicate) {
                SignupFailed(dispatch)
            } else {
                userList.push(mobileNumber)
                    .then((e) => {
                        console.log('success', e)
                        const userData = JSON.stringify({ mobileNumber, id: e.key })
                        AsyncStorage.setItem('Tokens', userData);
                        console.log('---->', userData)
                        SignupComplete(dispatch, userData)
                    })
                    .catch((err) => {
                        console.log(err);
                        console.log('failure');
                    })
            }
        })

    }
}

const formatNumber = (number) => number.match(/[0-9]/g).join('').slice(-10);

const onSignupRequest = (dispatch) => {
    dispatch({
        type: 'SIGNUP_REQUEST'
    })
}

const SignupFailed = (dispatch) => {
    dispatch({
        type: 'SIGNUP_FAILED'
    })
}

const SignupComplete = (dispatch, userData) => {
    dispatch({
        type: 'SIGNUP_COMPLETE',
        userData
    })
}

export const SignIn = (userData) => {
    return {
        type: 'SIGNED_IN',
        userData
    }
}
