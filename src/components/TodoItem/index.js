import React from 'react'
import './index.css'

const TodoItem = ({todo, onToggle, onDelete}) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      {todo.title}
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}

export default TodoItem
