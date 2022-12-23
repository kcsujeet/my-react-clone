import React from '../../../MyReact'
import './TodoItem.css'

export default function TodoItem( { todo, remove, index } ) {

    return (
        <div className='todo-item'>
            <p>{todo}</p>
            <button onClick={e => remove(index)} className='remove-button'>x</button>
        </div>
    )
}
