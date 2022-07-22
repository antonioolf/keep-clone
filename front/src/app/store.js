import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import interfaceSlice from './slices/interfaceSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    interface: interfaceSlice
  },
});
