import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./Components/App";
import todoList from "./Reducers/todoList";
import React from 'react';

ReactDOM.render(
<Provider store={createStore(todoList)}>
  <App />
</Provider>,
document.getElementById('root')
);

  