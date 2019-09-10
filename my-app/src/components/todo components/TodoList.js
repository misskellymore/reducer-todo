import React from 'react';
import Todo from './Todo.js';


const TodoList = props => {
        
        
        return (
            <div>
                
                    <h1>
                        TodoList
                    </h1>
                    {props.items.map(item => (
                    <Todo task={item} />
                    ))}
            </div>
        );
    

};

export default TodoList;