import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import * as SplashScreen from 'expo-splash-screen';

import MainStackNavigator from '@navigation/MainStackNavigator';
import { store } from '@store/store';
import * as LocalAuthentication from 'expo-local-authentication';

const persistor = persistStore(store);

const handleLocalAuthentication = () => {
  SplashScreen.preventAutoHideAsync();
  const { settings } = store.getState();
  if (settings.localAuthenticationStatus === true) {
    LocalAuthentication.authenticateAsync().then((result) => {
      if (result.success) {
        SplashScreen.hideAsync();
      }
    });
  } else {
    SplashScreen.hideAsync();
  }
};

export default function App(): JSX.Element {
  useEffect(handleLocalAuthentication, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style={'auto'} />
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}
