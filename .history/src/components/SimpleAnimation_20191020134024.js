import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
    
    componentWillMount() {
        this.position = new Animated.ValueXY(0,0);
        Animated.spring( this.position, { 
            easing: Easing.back(),
            toValue: { x: 200, y: 700 },
            duration: 2000, } )
    }
    
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