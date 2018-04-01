import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import Contacts from 'react-native-contacts';

export default class ContactFetch extends Component {
    constructor(){
        super()
        this.getContactList = this.getContactList.bind(this);
        this.fetchPress = this.fetchPress.bind(this);
    }
    getContactList(contacts) {
        const onNetwork = ['8787878787', '6767676767']
        const list = contacts.filter((indVcon) => {
            return indVcon.phoneNumbers.find(phno => {
                console.log('?', phno.number, onNetwork.indexOf(phno.number.match(/[0-9]/g).join('').slice(-10)) > -1)
                return  onNetwork.indexOf(phno.number.match(/[0-9]/g).join('').slice(-10)) > -1;
            })
        })
        console.log('list', list)
    }
    fetchPress() {
        AsyncStorage.clear();
        console.log('Contacts', Contacts);
        Contacts.getAll((err, contacts) => {
            if (err === 'denied') {
                console.log('<<<>>>>----->', err)
            } else {
                console.log('---->', contacts)
                this.getContactList(contacts);
            }
        })
    }
    render() {
        return (
            <View>
                <Text>
                    clickme
                </Text>
                <Button title="fetchContacts" onPress={this.fetchPress} />
            </View>
        )
    }
}