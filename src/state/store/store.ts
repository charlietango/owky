import uriReducer from '@slices/uri';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    uri: uriReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
