import { createSlice } from '@reduxjs/toolkit';
import { saveNote, getNotes } from '../../app/notesDB';

const initialState = {
    notesList: []
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        add: (state, action) => {
            saveNote(action.payload);
            state.notesList = getNotes();
        },
        remove: (state, action) => {
            
        }
    }
});

export const { add, remove } = notesSlice.actions;

export const selectNotesList = () => getNotes();

export default notesSlice.reducer;
