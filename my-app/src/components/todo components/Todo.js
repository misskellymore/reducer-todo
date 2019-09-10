import React from 'react';
import './Todo.css';

const Todo = props =>{

        return (
            <div> 

                <h1>
                    {props.task.item}
                </h1>

            </div>
        )
    }



export default Todo;