import Contacts from 'react-native-contacts';
import firebase from 'firebase';
import _ from 'lodash';

export const fetchContacts = () => {
    return (dispatch) => {
        dispatch(fetchUsersList())
        const userList = firebase.database().ref('/tokens/users');
        userList.on('value', function (snapshot) {
            userList.off('value');
            const listonNetwork = snapshot.val();
            console.log('list--->', listonNetwork)
            const ids = Object.keys(listonNetwork);
            const listonNetworkModified = ids.map((id) => {
                return { uid: id, mobileNumber: listonNetwork[id] }
            });
            console.log('listonNetworkModified', listonNetworkModified)
            Contacts.getAll((err, localContacts) => {
                if (err === 'denied') {
                    console.log('<<<>>>>----->', err)
                } else {
                    console.log('----> getting contact list', localContacts)
                    const TokenUsers = getContactList(localContacts, listonNetworkModified);
                    dispatch(recieveUsersList(TokenUsers))
                }
            })

        })
    }
}

const getContactList = (localContacts, listonNetwork) => {
    console.log("INDIA", localContacts, listonNetwork)
    return localContacts.filter((indVcon, index, self) => {
        return indVcon.phoneNumbers.find(phno => {
            // console.log('?', phno.number, onNetwork.indexOf(phno.number.match(/[0-9]/g).join('').slice(-10)) > -1);
            return listonNetwork.find((list) => {
                if (list.mobileNumber.match(/[0-9]/g).join('').slice(-10) === phno.number.match(/[0-9]/g).join('').slice(-10)) {
                    self[index].uid = list.uid;
                    self[index].tokenNumber = phno.number.match(/[0-9]/g).join('').slice(-10);
                    return true;
                }
                return false;
            })
        });
    });
}

const fetchUsersList = () => ({
    type: 'FETCH_USERS_LIST'
});

const recieveUsersList = (data) => ({
    type: 'RECIEVE_USERS_LIST',
    data
})