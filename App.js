import React, { Component } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Image, Dimensions, AsyncStorage } from 'react-native';
import { Card, Input, Button } from 'react-native-elements'; // Version can be specified in package.json

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BG_IMAGE = require('./img/bg_screen4.jpg');

export default class App extends Component {
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
  onSubmit(){
    AsyncStorage.setItem('MobileNumber', this.state.value);
    console.log(this.state)
  }
  format(value) {
    if (value.length !== 0 && value.length % 4 === 0 && value.repeatedDashCases('-') < 2) {
      return value.stringConcat(value.length - 1, '-')
    }
    return value;
  }
  render() {
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
              // displayError={true}
              // errorMessage='Duplicate Mobile Number'
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#000'
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: "purple",
    opacity: 0.8,
    width: 300,
    height: 45,
    borderColor: "black",
    borderWidth: 0,
    borderRadius: 50
  },
  disabledButtonStyle: {
    opacity: 1,
    width: 300,
    height: 45,
    borderColor: "black",
    borderWidth: 0,
    borderRadius: 50
  }
});
