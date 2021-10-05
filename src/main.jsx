import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ToDoList} from "./ToDoList"
import {ToDoItem} from "./ToDoItem"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('.App');
)
