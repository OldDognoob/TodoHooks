import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || )
    }
    return (
        <>
        <h1>What's the Plan fro Today?</h1>
        <TodoForm/>
            
        </>
    )
}

export default TodoList;
