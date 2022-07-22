import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMenu: false
};

export const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    toggle: (state) => {
      state.activeMenu = !state.activeMenu;
    }
  }
});

export const { toggle } = interfaceSlice.actions;

export const selectActiveMenu = (state) => state.interface.activeMenu;

export default interfaceSlice.reducer;
