import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Overview from '@screen/Overview/Overview';
import Settings from '@screen/Settings/Settings';
import AddAccount from '@screen/AddAccount/AddAccount';
import QrScanner from '@screen/QrScanner/QrScanner';

const Stack = createNativeStackNavigator();

export default function MainStackNavigator(): JSX.Element {
  const headerDefaultOptions = {
    headerLargeTitle: true,
    headerShadowVisible: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Overview" options={headerDefaultOptions} component={Overview} />
          <Stack.Screen name="Add" options={headerDefaultOptions} component={AddAccount} />
          <Stack.Screen name="Settings" options={headerDefaultOptions} component={Settings} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="QrScanner" options={{ headerShown: false }} component={QrScanner} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
