import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import ChattingAppRouter from './router';
import reducers from './reducers/index';

export default class ChattingApp extends React.Component{
    componentWillMount(){       
    var config = {
        apiKey: "AIzaSyDVsickDRkwD9nXfBtBUqrb0I_SROHI_6s",
        authDomain: "chatting-app-5fd5a.firebaseapp.com",
        databaseURL: "https://chatting-app-5fd5a.firebaseio.com",
        projectId: "chatting-app-5fd5a",
        storageBucket: "",
        messagingSenderId: "141402190865"
      };
      firebase.initializeApp(config);
    }
    render(){
        return(
            <Provider store={createStore(reducers,  {loginAuth: {email: 'test@test.com', password: 'test@123'}}, applyMiddleware(ReduxThunk, logger))}>
                <ChattingAppRouter />
            </Provider>
        )
    }
}