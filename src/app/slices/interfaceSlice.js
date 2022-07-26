import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeMenu: false,
    hasScroll: false
};

export const interfaceSlice = createSlice({
    name: 'interface',
    initialState,
    reducers: {
        toggle: (state) => {
            state.activeMenu = !state.activeMenu;
        },
        setHasScroll: (state, action) => {
            state.hasScroll = action.payload === 0 ? false : true;
        }
    }
});

export const { toggle, setHasScroll } = interfaceSlice.actions;

export const selectActiveMenu = (state) => state.interface.activeMenu;
export const selectHasScroll = (state) => state.interface.hasScroll;

export default interfaceSlice.reducer;
