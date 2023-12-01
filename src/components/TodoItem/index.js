// Write your code here

import './index.css'

const TodoItem = props => {
  const {deleteTodo, todoD} = props
  const {title, id} = todoD

  const deleteB = () => {
    deleteTodo(id)
  }

  return (
    <li className="bg">
      <p>{title}</p>
      <button type="button" className="bb" onClick={deleteB}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
