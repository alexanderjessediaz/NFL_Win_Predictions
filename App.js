import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen =  () => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Button title="Go to About Screen" />
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

const AboutScreen = () => (
  <View style={styles.container}>
    <Text>About</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#9AC4F8",
      },
      headerTintColor: "white",
      headerBackTitle: "Back"
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="About" component={AboutScreen}/>
  </Stack.Navigator>
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
    textAlign: 'center'
  },
});
