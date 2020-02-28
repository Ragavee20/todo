import React from 'react'


export const reducerTodo = (state = [], action) => {
    switch (action.type) {
        case 'Add':
            return [...state, action.data];
        case 'edit':
            const  edit = [...state];
            edit[action.data.index] = action.data.value
            return [...edit]
        default:
            return state;
    }
}