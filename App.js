import React, { Component } from 'react';
import { View, Text, TextInput,ImageBackground, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { Card, Input } from 'react-native-elements'; // Version can be specified in package.json
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const BG_IMAGE = require('./img/bg_screen4.jpg');
export default class App extends Component {
  render() {
    const gradientHeight = 600;
    const data = Array.from({ length: gradientHeight });
    const gradient = data.map((_, i) => (
      <View
        key={i}
        style={{
          position: 'absolute',
          backgroundColor: 'black',
          height: 1,
          bottom: (gradientHeight - i - 3),
          right: 0,
          left: 0,
          zIndex: 2,
          opacity: (1 / gradientHeight) * (i + 1)
        }}
      />
    ));
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
        {/* {gradient} */}
        <View style={{ alignItems: 'center' }}>
          <Input
            icon={
              <SimpleIcon
                name='lock'
                color='rgba(0, 0, 0, 0.38)'
                size={25}
                style={{ backgroundColor: 'yellow' }}
              />
            }
            value=''
            secureTextEntry={true}
            keyboardAppearance='dark'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='default'
            returnKeyType={'done'}
            blurOnSubmit={true}
            containerStyle={{ marginTop: 160, borderBottomColor: 'rgba(0, 0, 0, 0.38)' }}
            inputStyle={{ marginLeft: 10 }}
            placeholder={'Enter mobile number'}
            // ref={input => this.confirmationInput = input}
            onSubmitEditing={() => { }}
            onChangeText={() => { }}
            displayError={true}
            errorMessage='Please enter the same password'
          />
        </View>
        {/* <Card>
          <TextInput style={styles.input}
            autoCapitalize="none"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType="next"
            placeholder='Mobile Number'
            placeholderTextColor='purple'
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity style={styles.buttonContainer}
            onPress={() => { }}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </Card> */}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
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
  }
});