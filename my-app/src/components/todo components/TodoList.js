import React from 'react';
import Todo from './Todo.js';


const TodoList = props => {
        
        
        return (
            <div>
                
                    
                    {props.items.map(item => (
                    <Todo task={item}
                          toggle={props.toggle}   />
                    ))}

                    <button onClick={props.clear}>Clear Completed</button>
            </div>
        );
    

};

export default TodoList;