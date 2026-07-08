import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Motherboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Motherboard Quiz</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MultipleChoiceScreen')}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Motherboard;
