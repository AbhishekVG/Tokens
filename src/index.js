import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, Button } from 'react-native';
import Redux from 'redux';
import { Provider, connect } from 'react-redux';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import SignUpPage from './signup';
import ChatBot from './chat';

class TokensBooter extends Component {
    constructor() {
        super();
        this.asyncBoot();
    }
    async asyncBoot() {
        const id = await AsyncStorage.getItem('Tokens');
        console.log('------>', id)
        this.props.navigation.navigate(id ? 'AppZone' : 'AuthZone')
    }

    // save() {
    //     AsyncStorage.clear()
    //     console.log('savred',
    //     AsyncStorage.getAllKeys())
    // }

    render() {
        return (
            <View>
                <ActivityIndicator />
                {/* <Button title="save" onPress={this.save.bind(this)} /> */}
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
    // navigationOptions: {
    //     header: {visible: false}
    // }
    headerMode: 'none'
})

const AppZone = StackNavigator({
    ChatPage: {
        screen: ChatBot
    }
},
{
    // navigationOptions: {
    //     header: {visible: false}
    // },
    headerMode: 'none'
})

export default SwitchNavigator({
    AuthZone,
    AppZone,
    TokensBooter
},
    {
        initialRouteName: 'TokensBooter'
    }
)