import React from 'react';
import SimpleAnimation from './src/components/SimpleAnimation';
import Deck from './src/components/Deck';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Deck />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
