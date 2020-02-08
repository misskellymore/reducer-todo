import React, {useReducer} from 'react';
import './App.css';
import {initialState, reducer} from './reducers/reducer.js';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('reducer', reducer)
  console.log('reducer state', state)

  const addNew = todo => {
    
    dispatch({
      
      type: "ADD_TODO",
      payload: todo
      
    })
  };  


  const toggle = id => {
    console.log("toggle fire");
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };


  
  const clear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

 


  return (
    <div className="App">
                    <h1>
                        TodoList
                    </h1>
    <TodoForm addTodo={addNew} />
    <TodoList items={state.todos} 
              toggle={toggle}
              clear={clear}
              key={state.id}
              
               />
    
    </div>
  );
}

export default App;