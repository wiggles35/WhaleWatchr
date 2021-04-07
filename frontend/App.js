import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Student from './components/Student'
import LogIn from './components/login-button'
import SignInView from './views/SignInView'
import AdminRosterView from './views/AdminRosterView'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignInView"
          component={SignInView}
          options={{ title: 'Sign in'}}
        />
        <Stack.Screen
          name="AdminRosterView"
          component={AdminRosterView}
          options={{ title: 'Admin Roster'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* Default styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/
