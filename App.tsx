
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './src/types';

import WelcomeScreen from './src/screens/wellcome';
import HomeScreen from './src/screens/HomeScreen';
import LearningPathScreen from './src/screens/LearningPathScreen';
import DetailScreen from './src/screens/details';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />

        <Stack.Screen
          name="MainApp"
          component={HomeScreen}
        />

        <Stack.Screen
          name="LearningPath"
          component={LearningPathScreen}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShown: true,
            title: 'Detalhes',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
