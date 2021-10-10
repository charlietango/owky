import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import MainStackNavigator from '@navigation/MainStackNavigator';
import { store } from '@store/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar style={'auto'} />
      <MainStackNavigator />
    </Provider>
  );
}
