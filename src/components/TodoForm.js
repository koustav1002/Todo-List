import React,{useState} from "react";

export function TodoForm({addTodo}){
    const [value,setValue]=useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(value!=="") addTodo(value);

        setValue(""); 
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value}
            placeholder="What's up for today?" onChange={
                (e)=>setValue(e.target.value)
            }/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
}