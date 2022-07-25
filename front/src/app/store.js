import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import interfaceSlice from './slices/interfaceSlice';
import notesSlice from './slices/notesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    interface: interfaceSlice,
    notes: notesSlice,
  },
});
