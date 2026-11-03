import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './src/types';

import WelcomeScreen from './src/screens/wellcome';
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import DetailScreen from './src/screens/details';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#6200EE' }}>
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Aprender" component={HomeScreen} /> 
      <Tab.Screen name="Perfil" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainTabs} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: true, title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
