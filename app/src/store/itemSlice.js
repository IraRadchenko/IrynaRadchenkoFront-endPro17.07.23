import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'items',
    initialState: {
        items: []
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },
    }
});

export const { addContact, deleteContact,setItems } = contactSlice.actions;

export default contactSlice.reducer;