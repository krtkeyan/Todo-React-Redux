import React from 'react';
import AddTodo from "./Containers/AddTodo";
import ToggleFilter from "./Presentation/ToggleFilter";
import TodoApp from "./Containers/TodoApp";

const App = () => (
      <div>
      <AddTodo />
      <ToggleFilter/>
      <TodoApp />     
      </div>
);

export default App;