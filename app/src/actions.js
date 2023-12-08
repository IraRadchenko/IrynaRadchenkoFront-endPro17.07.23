export const addItem = (newItem) => ({
    type: 'ADD_ITEM',
    payload: newItem,
});

export const deleteItem = (itemId) => ({
    type: 'DELETE_ITEM',
    payload: itemId,
});

export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items,
});