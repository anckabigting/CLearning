import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QAScreen from './screens/QAScreen';
import MotherboardQuizScreen from './screens/MotherboardQuizScreen';
import PowerSupplyQuizScreen from './screens/PowerSupplyScreen';
import MotherboardIdentificationScreen from './screens/MotherboardIdentificationScreen';
import PowerSupplyIdentificationScreen from './screens/PowerSupplyIdentificationScreen';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleStartButtonPress = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/C-LEARNINGblue.png')} style={styles.logo} />
      <TouchableOpacity onPress={handleStartButtonPress} style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenuScreen = ({ navigation }) => {
  const handleQaButtonPress = () => {
    navigation.navigate('Multiple-Choice');
  };

  const handleIdentificationButtonPress = () => {
    navigation.navigate('Identification');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleQaButtonPress} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Multiple-Choice</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleIdentificationButtonPress} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Identification</Text>
      </TouchableOpacity>
    </View>
  );
};

const IdentificationScreen = ({ navigation }) => {
  const handleMotherboardIdentificationPress = () => {
    navigation.navigate('MotherboardIdentification');
  };

  const handlePowerSupplyIdentificationPress = () => {
    navigation.navigate('PowerSupplyIdentification');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMotherboardIdentificationPress} style={styles.identificationButton}>
        <Text style={styles.identificationButtonText}>Motherboard Identification</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePowerSupplyIdentificationPress} style={styles.identificationButton}>
        <Text style={styles.identificationButtonText}>Power Supply Identification</Text>
      </TouchableOpacity>
    </View>
  );
};

// Rest of your code...

const App = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Multiple-Choice" component={QAScreen} />
        <Stack.Screen name="Identification" component={IdentificationScreen} />
        <Stack.Screen name="MotherboardIdentification" component={MotherboardIdentificationScreen} />
        <Stack.Screen name="PowerSupplyIdentification" component={PowerSupplyIdentificationScreen} />
        <Stack.Screen name="MotherboardQuiz" component={MotherboardQuizScreen} />
        <Stack.Screen name="PowerSupplyQuiz" component={PowerSupplyQuizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faf7dc',
  },
  logo: {
    width: 350,
    height: 350,
    marginTop: 5,
    marginBottom: 100,
  },
  startButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    
  },
  startButtonText: {
    color: '#03118f',
    fontSize: 20,
    fontWeight: 'bold',
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
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  identificationButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  identificationButtonText: {
    color: '#03118f',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;