import React, { useState } from 'react';

const TodoForm = props => {

    const [input, setInput] = useState({

        item: "",
        completed: false,
        id: null

    });


    const handleChange = e => {
        setInput({
            ...input,
            item: e.target.value,
            id: Date.now()
    
        })
    }


    console.log('input', input)


    const addTodo = e => {
        e.preventDefault();
        props.addTodo(input);
        setInput({
            item: "",
            completed: false,
            id: null
        })
    
    }
    
    return (

        <form onSubmit= {addTodo}>
    
            <input 
            type = "text"
            onChange={handleChange}
            value= {input.item}
            key={props.id}
    
            />
            <button>Add Task</button>
    
        </form>
    )

}







export default TodoForm;