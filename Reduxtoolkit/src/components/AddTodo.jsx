import React from "react";
import {useDispatch} from 'react-redux'
import {addTodo, removeTodp} from '../features/todo/todoSlice'

export default function AddTodo() {

    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form action="" onSubmit={addTodoHandler}>
            <input type="text" placeholder="Enter" value={input} onChange={(e) => setInput(e.target.value)}/>

            <button type="submit">
                Add todo
            </button>
        </form>
    )
}