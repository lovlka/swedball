import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type SearchResult = {
  hits: Array<object>
}

export interface SearchState {
  result: SearchResult | null;
}

const initialState: SearchState = {
  result: null
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<SearchResult>) => {
      state.result = action.payload;
    }
  }
});

export const { setResult } = searchSlice.actions;

export default searchSlice.reducer;