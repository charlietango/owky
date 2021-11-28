import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '@type/account';

export interface AccountState {
  list: Account[];
}

const initialState: AccountState = {
  list: [],
};

export const accountSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Account>) => {
      state.list.push(action.payload);
    },
  },
});

export const { add } = accountSlice.actions;

export default accountSlice.reducer;
