import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import MainStackNavigator from '@navigation/MainStackNavigator';
import { store } from '@store/store';

const persistor = persistStore(store);

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style={'auto'} />
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}
