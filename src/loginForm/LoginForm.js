import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from '../common';

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser({email, password});
    }
    renderButton(){
        if(this.props.loader){
            return <Spinner size='large' />
        }
        return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
        );
    }
    render(){
        return (
            <Card style={{marginTop: 53}}>
                <CardSection>
                    <Input
                      label='Email'
                      placeholder='email@gmail.com'
                      onChangeText={this.onEmailChange.bind(this)}
                      value={this.props.email}
                      />
                </CardSection>

                <CardSection>
                    <Input
                      secureTextEntry
                      label='Password'
                      placeholder='Password'
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
                    />
                </CardSection>
                
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
} 
const mapStateToProps = (state) => {
    const { email, password, loader, error } = state.loginAuth;

    return { email, password, loader, error};
}

export default connect( mapStateToProps, { emailChanged, passwordChanged, loginUser } )(LoginForm);