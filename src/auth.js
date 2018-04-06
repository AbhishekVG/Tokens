import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, Button } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import { StackNavigator, SwitchNavigator } from 'react-navigation';
import firebase from 'firebase';
// import Spinner from 'react-native-spinkit';
import { reducers } from './reducers';
import SignUpPage from './signup';
import ChatBot from './chat';
import { SignIn } from './actions/signupAction';

class TokensBooter extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyC0glo50og1l91LGiifM4IiIScqhcx57tA",
            authDomain: "tokens-c81a6.firebaseapp.com",
            databaseURL: "https://tokens-c81a6.firebaseio.com",
            projectId: "tokens-c81a6",
            storageBucket: "",
            messagingSenderId: "247903513237"
        };
        firebase.initializeApp(config);
        // firebase.auth().signInWithEmailAndPassword('tokens@zoro.com', 'testing')
        //     .then((data) => {
        //         console.log(data);
        //         this.asyncBoot();
        //     })
        //     .catch((err) => {
        //         console.log('Initializing failed')
        //     })
    }
    componentDidMount() {
        this.asyncBoot();
    }
    async asyncBoot() {
        console.log('asyncbot',this.props)
        let userData;
        try {
            userData = await AsyncStorage.getItem('Tokens');
            this.props.SignIn(JSON.parse(userData));
        } catch (err) {
            console.log('error', err)
        }
        console.log('------>userdetails', userData)
        this.props.navigation.navigate(userData ? 'AppZone' : 'AuthZone')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        )
    }
}

const AuthZone = StackNavigator({
    SignUpPage: {
        screen: SignUpPage
    }
},
    {
        headerMode: 'none'
    })

const AppZone = StackNavigator({
    ChatPage: { screen: ChatBot }
},
    { headerMode: 'none' }
)

const TokensBooterz = connect(null, { SignIn })(TokensBooter);

export default SwitchNavigator({
    AuthZone,
    AppZone,
    TokensBooterz
},
    {
        initialRouteName: 'TokensBooterz'
    }
)