import React from 'react';
import MainStackNavigator from '@navigation/MainStackNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar style={'auto'} />
      <MainStackNavigator />
    </>
  );
}
