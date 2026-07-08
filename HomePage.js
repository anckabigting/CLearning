import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const HomePage = () => {
  const handleStartButtonPress = () => {
    // Handle start button press here
    console.log('Start button pressed!');
  };

  // Get screen dimensions
  const screenWidth = Dimensions.get('window *4000').width;
  const screenHeight = Dimensions.get('window *4000').height;

  // Calculate logo width and height
  const logoWidth = screenWidth * 0.5; // Adjust the percentage as desired
  const logoHeight = screenHeight * 0.5; // Adjust the percentage as desired

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/C-LEARNING.png')}
        dimension={{ width:200, height:200}}
        style={{ width: logoWidth, height: logoHeight }}
      />
      {/* Other components */}
      <TouchableOpacity onPress={handleStartButtonPress} style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecd9ff',
  },
  logo: {
    width: '50%', // Adjust the width as desired (e.g., '50%' for half of the screen width)
    height: '50%', // Adjust the height as desired (e.g., '50%' for half of the screen height)
    marginBottom: 50,
  },

  startButton: {
    backgroundColor: '#69c0e6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  startButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomePage;
