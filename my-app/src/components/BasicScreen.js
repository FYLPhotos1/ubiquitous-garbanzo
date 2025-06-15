import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BasicScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
