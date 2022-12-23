import React from '../../../MyReact'
import './TodoItem.css'

export default function TodoItem( { todo } ) {

    return (
        <div className='todo-item'>
            <p>{todo}</p>
        </div>
    )
}
