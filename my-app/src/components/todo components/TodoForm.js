import React, {useState} from 'react';

const Todoform = () => {

    const [input, setInput] = useState({
        todos: [

            {   item: 'Learn about reducers',
                completed: false,
                id: 3892987589
              }
        ]
    });

    const handleChange = e =>{

        setInput({
            ...input,
            item: e.target.value
        });
    };

    console.log('input', input);

        return (
            <form>
               <input value={input.item}
                      onChange={handleChange}
                      type="text" />
               <button>Add Task</button>
            </form>
        )
    



}


export default Todoform;


