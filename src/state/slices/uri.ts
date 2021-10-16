import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Uri = string;

export interface TokenState {
  list: Uri[];
}

const initialState: TokenState = {
  list: [
    'otpauth://totp/Twitter:@charlietango592?secret=Q45TFIVGPFX4WORM&issuer=Twitter',
    'otpauth://totp/Github:@charlietango?secret=A4JBUW7QCBPGQJOA&issuer=Github',
    'otpauth://totp/NPM:@charlietango?secret=EIMULUQBMZ3W5W77&issuer=NPM',
  ],
};

export const uriSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Uri>) => {
      state.list.push(action.payload);
    },
  },
});

export const { add } = uriSlice.actions;

export default uriSlice.reducer;
