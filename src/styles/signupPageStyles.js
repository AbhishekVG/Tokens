import React from 'react';
import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const styles = StyleSheet.create({
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
