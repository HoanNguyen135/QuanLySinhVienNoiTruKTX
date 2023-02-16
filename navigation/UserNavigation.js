import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen,RegisterAccountScreen} from '../Screen'
const Stack = createNativeStackNavigator();


function UserStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
    >
      <Stack.Screen name="LoginScreen" component={ LoginScreen } />
      <Stack.Screen name="RegisterAccountScreen" component={RegisterAccountScreen}/>
    </Stack.Navigator>
  );
}

export default UserStackScreen;