import React from 'react'
import TodoItems from './TodoItems'

const Todos = ({ todos, handleonDelete, handleEditItem, editItem }) => {
  return (
    <div className="container">
      <h3 className='text-center'>Todos List</h3>

      <div className="row">

        {todos.length === 0 ? "no todo to display" :
          todos.map((todo) => {
            return <TodoItems key={todo.id}
              todo={todo} handleonDelete={handleonDelete} handleEditItem={handleEditItem} editItem={editItem} />
          })
        }

      </div>
    </div>
  )
}

export default Todos
