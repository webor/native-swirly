import React, { Component } from 'react';
import { View } from 'react-native';

class SimpleAnimation extends Component {
    constructor(props) {
        super(props);
    }
    
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
        color: 'green',
    }
};

export default SimpleAnimation;