import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import SignUp from './signup';
import Contacts from './chat/contacts';
import ContactsFetch from './chat/fetchContacts';

export default TabNavigator(
    {
      Contacts: { screen: Contacts },
      ChatHistory: { screen: ContactsFetch },
      Status: { screen: SignUp },
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          // console.log('---->', focused, tintColor, navigation)
          if (routeName === 'Contacts') {
            iconName = `ios-contacts${focused ? '' : '-outline'}`;
          } else if (routeName === 'ChatHistory') {
            iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
          } else if (routeName === 'Status') {
            iconName = `ios-paper-plane${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#00776d',
        inactiveTintColor: 'grey',
        // activeBackgroundColor: '#088d6e',
        style: {
          // backgroundColor: '#00a67f'
        }
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
    }
  );


// import Icon from 'react-native-vector-icons/FontAwesome';
// const myButton = (
//   <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
//     Login with Facebook
//   </Icon.Button>
// );

// const customTextButton =() => (
//   <Icon.Button name="facebook" backgroundColor="#3b5998">
//     <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
//   </Icon.Button>
// );

// export default customTextButton;