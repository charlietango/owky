import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  localAuthenticationStatus: boolean;
}

const initialState: SettingsState = {
  localAuthenticationStatus: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLocalAuthenticationStatus: (state, action: PayloadAction<boolean>) => {
      state.localAuthenticationStatus = action.payload;
    },
  },
});

export const { setLocalAuthenticationStatus } = settingsSlice.actions;

export default settingsSlice.reducer;
