import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
export function Todo({task,toggleComplete,deleteTodo,editTodo}){
    return (
        <div className="Todo">
            <p onClick={()=>toggleComplete(task.id)} className={`${task.completed?'completed':""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}className="icon-pointer"/>
                <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)} className="icon-pointer"/>
            </div>
        </div>
    );
}
