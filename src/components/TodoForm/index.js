import React, {useState} from 'react'
import './index.css'

const TodoForm = ({onAdd}) => {
  const [task, setTask] = useState('')

  const handleTaskChange = event => {
    setTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (task.trim() !== '') {
      onAdd(task)
      setTask('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={handleTaskChange}
        className="task-input"
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  )
}

export default TodoForm
