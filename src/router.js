import React from 'react';
import { View } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './loginForm/LoginForm';
// import ChatPage from './chatBox/ChattingApp';
import ChatTab from './chatBox';

export default class ChattingAppRouter extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>          
                <Router>
                    <Scene key="auth" style={{paddingTop: 25}}>
                        <Scene key='login' component={LoginForm} title='Please Login' style={{paddingTop: 0}}/>
                    </Scene>
                    <Scene key="chat">
                        <Scene key='chatPage' component={ChatTab} title="ChatWindow" hideNavBar />
                    </Scene>
                </Router>
            </View>
        )
    }
}
