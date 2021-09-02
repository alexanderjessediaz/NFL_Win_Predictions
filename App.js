import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen =  () => (
  <View style={styles.layout}>
    <Text style={styles.titles}>Home</Text>
  </View>
)

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home"
      component={HomeScreen}
    />
  </Stack.Navigator>
);

const UserLeague = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>UserLeague</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Login" component={LoginScreen} />
    <Tab.Screen name="Profile" component={ProfileNavigator}/>
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>{
      <AppNavigator />
      }</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
