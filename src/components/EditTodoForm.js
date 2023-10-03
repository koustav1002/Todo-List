import React,{useState} from "react";

export function EditTodoForm({editTodo,task}){
    const [value,setValue]=useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(value!=="") editTodo(value,task.id);

        setValue(""); 
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value}
            placeholder="Update task" onChange={
                (e)=>setValue(e.target.value)
            }/>
            
            <button type="submit" className="todo-btn">Update</button>
        </form>
    );
}
