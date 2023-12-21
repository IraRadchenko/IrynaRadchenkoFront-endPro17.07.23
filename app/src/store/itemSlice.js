import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'items',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
        setItem: (state, action) => {
            state.items = action.payload;
        },
    }
});

export const { addItem, deleteItem,setItem } = contactSlice.actions;

export default contactSlice.reducer;