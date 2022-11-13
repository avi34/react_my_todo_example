import React from 'react'
import TodoItems from './TodoItems'

export const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className='text-center'>To list</h3>
            {props.todolist.length === 0 ? "no list found" :

                props.todolist.map((todol) => {
                    return <TodoItems todo={todol} key={todol.sno} onDelete={props.onDelete} />
                })

            }


        </div>
    )
}


