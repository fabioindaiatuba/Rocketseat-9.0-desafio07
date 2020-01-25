import React from 'react';
import './config/ReactotronConfig';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome React Native</Text>
      <Text style={styles.welcome}>Abaixo</Text>
    </View>
  );
}
