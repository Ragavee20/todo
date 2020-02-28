
export const addTodo = (text) => {
    return{
        type: 'Add',
        data:text
    }
}

export const editTodo = (editText) => {
    return{
        type: 'edit',
        data: editText
    }
}