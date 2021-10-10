import tokenReducer from '@slices/token';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
