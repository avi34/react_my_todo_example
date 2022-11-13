import React from 'react'

const TodoItems = ({ todo, onDelete }) => {
    return (
        <>

            <p>{todo.name}</p>
            <p>{todo.discription}</p>
            <button className='btn  btn-sm   btn-danger' onClick={() => (onDelete(todo))} >Delete</button>
        </>
    )
}

export default TodoItems    