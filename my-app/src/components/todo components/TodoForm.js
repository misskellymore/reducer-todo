import React, {useState} from 'react';

const Todoform = props => {

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
        });
    };

    console.log('input', input);

    const addTodo = e => {
        e.preventDefault();
        props.addTodo(input);
        setInput({
                item: "",
                completed: false,
                id: null
        });
    };

        return (
            
            <form onSubmit={addTodo} >
               <input value={input.item}
                      onChange={handleChange}
                      type="text" />
               <button>Add Task</button>
            </form>
            
        )
    



}


export default Todoform;


