import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import * as SplashScreen from 'expo-splash-screen';
import { AppState, AppStateStatus, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';

import MainStackNavigator from '@navigation/MainStackNavigator';
import { store } from '@store/store';
import * as LocalAuthentication from 'expo-local-authentication';
import LockScreen from '@screen/LockScreen/LockScreen';
import { lightTheme, darkTheme } from './theme/theme';

const persistor = persistStore(store);

const handleLocalAuthentication = (onSuccess: () => void) => {
  const { settings } = store.getState();
  if (settings.localAuthenticationStatus === true) {
    LocalAuthentication.authenticateAsync().then((result) => {
      if (result.success) {
        onSuccess();
      }
    });
  } else {
    onSuccess();
  }
};

export default function App(): JSX.Element {
  const appState = useRef(AppState.currentState);
  const [showLockScreen, setShowLockScreen] = useState(false);
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    handleLocalAuthentication(() => SplashScreen.hideAsync());
    AppState.addEventListener('change', handleAppStateChange);
  }, []);

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (appState.current === 'active' && nextAppState === 'inactive') {
      setShowLockScreen(true);
    }
    if (appState.current === 'inactive' && nextAppState === 'active') {
      setShowLockScreen(false);
    }

    if (appState.current === 'background' && nextAppState === 'active') {
      handleLocalAuthentication(() => setShowLockScreen(false));
    }

    appState.current = nextAppState;
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
          {showLockScreen ? <LockScreen /> : <MainStackNavigator />}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
