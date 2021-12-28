import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '@type/account';

export interface AccountState {
  list: Account[];
}

const initialState: AccountState = {
  list: [],
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Account>) => {
      state.list.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((account) => account.uuid !== action.payload);
    },
    wipe: (state) => {
      state.list = [];
    },
  },
});

export const { add, remove, wipe } = accountSlice.actions;

export default accountSlice.reducer;
