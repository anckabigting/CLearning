import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';

import Motherboard from './Motherboard';
import MultipleChoiceScreen from './MultipleChoiceScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Motherboard"
        component={Motherboard}
        options={{ title: 'Motherboard' }}
      />
      <Stack.Screen
        name="MultipleChoiceScreen"
        component={MultipleChoiceScreen}
        options={{ title: 'Multiple Choice Quiz' }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
