import React, { Component } from 'react';
import { View } from 'react-native';

class Ball extends Component {
    render() {
        return (
            <View style = { styles.ball }/>
        );
    }
}

const styles = {
    ball: {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'green'
    }
};

export default Ball;