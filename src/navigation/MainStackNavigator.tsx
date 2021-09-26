import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Overview from '@screens/Overview/Overview';
import Settings from '@screens/Settings/Settings';
import AddAccount from '@screens/AddAccount/AddAccount';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Overview" options={{ headerLargeTitle: true }} component={Overview} />
        <Stack.Screen name="Add" options={{ headerLargeTitle: true }} component={AddAccount} />
        <Stack.Screen name="Settings" options={{ headerLargeTitle: true }} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
