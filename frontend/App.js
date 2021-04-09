import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInView from './views/SignInView'
import AdminRosterView from './views/AdminRosterView'
import CreateAccountView from './views/CreateAccountView'
import ParentView from './views/ParentView'

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
          name="CreateAccountView"
          component={CreateAccountView}
          options={{ title: 'Create Account'}}
        />
        <Stack.Screen
          name="AdminRosterView"
          component={AdminRosterView}
          options={{ title: 'Admin Roster'}}
        />
        <Stack.Screen
          name="ParentView"
          component={ParentView}
          options={{ title: 'Parent View'}}
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
