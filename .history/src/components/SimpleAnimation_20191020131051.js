import React, { Component, View } from 'react-native';

class Ball extends Component {
    render() {
        return (
            <View style = { styles.ball }/>
        );
    }
}

const styless = {
    ball: {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 30,
        color: '#44001',
    }
};

export default Ball;