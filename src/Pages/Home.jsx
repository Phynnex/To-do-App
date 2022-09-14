import React from 'react';
import { Link } from "react-router-dom";

import '../App.css';
import TodoList from '../components/TodoList';
import Login from './Login'
function App() {
  return (

    
       
    <div className="todo-app">
        
      <TodoList />
    
    </div>
  );
}

export default App;
