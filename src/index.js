import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import { reducers } from './reducers';
import Auth from './auth';

export default class Tokens extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxLogger))}>
                    <Auth />
                </Provider>
            </View>
        )
    }
}
