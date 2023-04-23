import logo from "../logo.svg";
import React, { useState } from 'react';
import Todo from "./Todo";

let newTodo = '';
function Todos(){
    const [todos, setTodos] = useState([
        {id: 1, title: "Todo 1", completed: false},
        {id: 2, title: "Todo 2", completed: true},
    ]);

    const RemoveTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        // console.log("remove todo");
    }
    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        }));
        // console.log("completed todo");
    }
    return (
        <div>
            <input type="text" onChange={(e) => newTodo = e.target.value}/>
            <button
                onClick={()=>{
                     setTodos([...todos, {id: todos.length+1, title: newTodo, completed: false}]);
                }}>
                add new todo</button>
            {
                todos.map(({id,completed,title}) => (
                            <h1 key={id}>
                                <Todo id={id} completed={completed} onRemove={RemoveTodo} onToggle={toggleTodo}>{title}</Todo>
                            </h1>
                ))}
        </div>
    );
}

export default Todos;