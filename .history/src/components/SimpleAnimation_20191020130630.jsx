import React, { Component, View } from 'react-native';

class Ball extends Component {
    render() {
        return (
            <View  style = { style.ball }/>
        );
    }
}

const style = {
    ball: {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 30,
        color: '#44001',
    }
};