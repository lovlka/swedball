import { configureStore } from '@reduxjs/toolkit';
import search from './slices/search';

export const makeStore = () => {
  return configureStore({
    reducer: {
      search
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
