import React from 'react';
import { View } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './loginForm/LoginForm';
import ChatPage from './chatBox/ChattingApp';

export default class ChattingAppRouter extends React.Component{
    render(){
        return(
            <View style={{flex: 1, paddingTop: 25}}>          
                <Router sceneStyle={{ paddingTop: 50}}>
                    <Scene key="auth">
                        <Scene key='login' component={LoginForm} title='Please Login' />
                    </Scene>
                    <Scene key="chat">
                        <Scene key='chatPage' component={ChatPage} title="ChatWindow" />
                    </Scene>
                </Router>
            </View>
        )
    }
}
