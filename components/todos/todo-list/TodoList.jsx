import React, { useState, useRef, useEffect } from '../../../MyReact'
import TodoItem from '../todo-item/TodoItem'
import './TodoList.css'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        if (inputRef && inputRef.current) {
            setTimeout(() => {
                inputRef.current.focus()
            });
        }
    }, [newTodo])

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, newTodo])
        setNewTodo('')
    }

    const handleInputChange = (e) => {
        e.preventDefault()
        setNewTodo(e.target.value)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='todo-form w-100'>
                <input ref={inputRef} value={newTodo} onInput={handleInputChange} type='text' placeholder='Have anything to get done?' className='todo-input w-75' />
                <button type='submit' className='submit-button w-25'>Submit</button>
            </form>

            {
                todos.length
                ?
                todos.map(item => <TodoItem todo={item} />)
                :
                <h3>Looks like you have a lot of free time. 😂 </h3>
            }

        </div>
    )
}
