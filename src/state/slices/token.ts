import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Token = string;

export interface TokenState {
  tokens: Token[];
}

const initialState: TokenState = {
  tokens: [],
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Token>) => {
      state.tokens.push(action.payload);
    },
  },
});

export const { add } = tokenSlice.actions;

export default tokenSlice.reducer;
