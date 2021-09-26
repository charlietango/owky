import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Overview from '@screens/Overview/Overview';
import Settings from '@screens/Settings/Settings';
import AddAccount from '@screens/AddAccount/AddAccount';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator(): JSX.Element {
  const headerDefaultOptions = {
    headerLargeTitle: true,
    headerShadowVisible: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Overview" options={headerDefaultOptions} component={Overview} />
        <Stack.Screen name="Add" options={headerDefaultOptions} component={AddAccount} />
        <Stack.Screen name="Settings" options={headerDefaultOptions} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
