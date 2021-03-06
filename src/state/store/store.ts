import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import accountReducer from '@slice/account';
import settingsReducer from '@slice/settings';

const reducers = combineReducers({
  account: accountReducer,
  settings: settingsReducer,
});
const persistedReducers = persistReducer({ key: 'root', storage: AsyncStorage }, reducers);

/**
 * https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
 */
const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
