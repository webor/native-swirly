import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
    
    render() {
        return (
            <Animated.View>
            <View style = { styles.ball }/>
            </Animated.View>
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