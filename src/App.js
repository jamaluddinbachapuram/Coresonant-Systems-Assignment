import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => {
        setTodos(response.data)
      })
      .catch(error => {
        console.error('Error fetching todos:', error)
      })
  }, [])

  const handleAddTodo = title => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const handleToggleTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  const filteredTodos = showCompleted
    ? todos.filter(todo => todo.completed)
    : todos

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Show All' : 'Show Completed'}
      </button>
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  )
}

export default App
