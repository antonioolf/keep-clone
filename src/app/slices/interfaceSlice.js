import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openedMenu: true,
    hasScroll: false
};

export const interfaceSlice = createSlice({
    name: 'interface',
    initialState,
    reducers: {
        toggle: (state) => {
            state.openedMenu = !state.openedMenu;
        },
        setHasScroll: (state, action) => {
            state.hasScroll = action.payload === 0 ? false : true;
        }
    }
});

export const { toggle, setHasScroll } = interfaceSlice.actions;

export const selectOpenedMenu = (state) => state.interface.openedMenu;
export const selectHasScroll = (state) => state.interface.hasScroll;

export default interfaceSlice.reducer;
