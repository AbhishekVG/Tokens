import React, { Component } from 'react';
import { View } from 'react-native';
import Redux from 'redux';
import { Provider, connect } from 'react-redux';
import { Actions, Scene, Router, Stack } from 'react-native-router-flux'

import SignUpPage from './signup';
import chatBot from './chat';

export default class Tokens extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router>
                    <Stack key="root">
                        <Scene key='auth' >
                            <Scene key='signup' hideNavBar component={SignUpPage} />
                        </Scene>
                        <Scene key='chatPage' hideNavBar>
                            <Scene key='welcomePage' component={chatBot} tabs/>
                        </Scene>
                    </Stack>
                </Router>
            </View>
        )
    }
}
