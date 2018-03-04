import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import KeyboardSpacer from 'react-native-keyboard-spacer'; // 0.4.1
import firebase from 'firebase';
import { sendMessage, syncMessages } from '../actions';

class ChatPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUserId: firebase.auth().currentUser.uid,
      curentUserName: firebase.auth().currentUser.email, 
    }
  }

  componentWillMount() {
    this.props.syncMessages();
  }

  onSend(messages = []) {
    this.props.sendMessage(messages);
  }

  componentWillReceiveProps(nextProps){
  this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, nextProps.chatHistory),
    }));
  }

  render() {
    const data = this.props.chatHistory ? this.props.chatHistory: [];
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={data.reverse()}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: this.state.currentUserId,
            name: this.state.curentUserName
          }}
        />
        <KeyboardSpacer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ messageData }) => {
  return {chatHistory: messageData}
}
export default connect(mapStateToProps, { sendMessage, syncMessages })(ChatPage);