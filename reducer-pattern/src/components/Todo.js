import React from 'react';
import './Todo.css';


const Todo = props => {

    return (
        <div>

            <h2 className = {props.task.completed ? "completed" : null}
            onClick = {() => props.toggle(props.task.id)}>

                {props.task.item}

            </h2>
        </div>
    )
}


export default Todo;