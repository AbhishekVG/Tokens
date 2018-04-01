import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Image, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Card, Input, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { signUp } from './actions/signupAction';
// import firebase from 'firebase';

import { styles } from './styles/signupPageStyles';
const BG_IMAGE = require('./img/bg_screen4.jpg');

class SignUpPage extends Component {
    state = {
        borderColor: 'white',
        disabled: true,
    }

    validateMobileNumber(value) {
        if (value.length < 12) {
            this.setState({ borderColor: 'yellow', value: this.format(value), disabled: true })
        } else if (value.length === 12) {
            this.setState({ borderColor: 'green', value: this.format(value), disabled: false })
        }
    }

    validateMobileNumberOnBlur(val) {
        if (this.state.borderColor === 'yellow') {
            this.setState({ borderColor: 'red' })
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextprops', nextProps);
        if (nextProps.registered) {
            this.props.navigation.navigate('ChatPage');
        }
    }
    onSubmit() {
        this.props.signUp(this.state.value)
        // firebase.database().ref(`/tokens/users`).push(this.state.value)
        //     .then(() => {
        //         AsyncStorage.setItem('Tokens', this.state.value);
        //         this.props.navigation.navigate('ChatPage');
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         console.log('failure');
        //     })
        // console.log(this.state);
    }



    format(value) {
        if (value.length !== 0 && value.length % 4 === 0 && value.repeatedDashCases('-') < 2) {
            return value.stringConcat(value.length - 1, '-')
        }
        return value;
    }

    render() {
        console.log('props', this.props)
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={BG_IMAGE}
                    style={styles.bgImage}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('./img/icon.png')}
                            style={{
                                width: 150,
                                height: 150,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Input
                            value={this.state.value}
                            // autoFocus
                            keyboardAppearance='dark'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='numeric'
                            inputStyle={{ marginLeft: 10, color: 'white', fontSize: 30, height: 60, justifyContent: 'center' }}
                            returnKeyType={'done'}
                            blurOnSubmit={true}
                            containerStyle={{ marginTop: 100, borderBottomColor: this.state.borderColor, borderBottomWidth: 3 }}
                            placeholder={'Enter mobile number'}
                            placeholderTextColor="white"
                            maxLength={12}
                            onBlur={(val) => this.validateMobileNumberOnBlur(val)}
                            onSubmitEditing={() => { }}
                            onChangeText={(val) => this.validateMobileNumber(val)}
                            displayError={this.props.showError}
                            errorMessage={this.props.errorMessage}
                        />
                        <Button
                            title="Sign Up"
                            titleStyle={{ color: 'white', fontSize: 15 }}
                            containerStyle={{ marginTop: 10 }}
                            onPress={this.onSubmit.bind(this)}
                            disabled={this.state.disabled}
                            buttonStyle={styles.buttonStyle}
                            disabledStyle={styles.disabledButtonStyle}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    console.log('store', state)
    const { showError, errorMessage, registered } = state.signUpData;
    return {
        showError,
        errorMessage,
        registered
    }
}
export default connect(mapStateToProps, { signUp })(SignUpPage);
