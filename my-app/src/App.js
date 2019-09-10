import React, {useReducer} from 'react';
import './App.css';
import {initialState, reducer} from './reducers/reducer.js';
import TodoList from '../src/components/todo components/TodoList.js';
import TodoForm from '../src/components/todo components/TodoForm.js';

function App() {

  const [state, theAction] = useReducer(reducer, initialState);
  console.log('reducer', reducer)
  console.log('reducer state', state)

  return (
    <div className="App">
    <TodoForm />
    <TodoList items={state.todos} />
    </div>
  );
}

export default App;
