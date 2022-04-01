import { registerRootComponent } from 'expo';
import App from './src/App';
import 'react-native-get-random-values';
import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';

Sentry.init({ dsn: Constants.manifest.extra.sentry.dsn });
registerRootComponent(App);
