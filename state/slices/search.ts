import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  result: object | null;
}

const initialState: SearchState = {
  result: null
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<object>) => {
      state.result = action.payload;
    }
  }
});

export const { setResult } = searchSlice.actions;

export default searchSlice.reducer;