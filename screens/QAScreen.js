import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QAScreen = () => {
  const navigation = useNavigation();

  const handleMotherboardButtonPress = () => {
    navigation.navigate('MotherboardQuiz');
  };

  const handlePowerSupplyButtonPress = () => {
    navigation.navigate('PowerSupplyQuiz');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMotherboardButtonPress} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Motherboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePowerSupplyButtonPress} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Power Supply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf7dc',
  },
  menuButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  menuButtonText: {
    color: '#03118f',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default QAScreen;
