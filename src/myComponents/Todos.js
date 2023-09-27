import React from 'react'
import TodoItems from './TodoItems'

const Todos = ({todos,handleonDelete,handleEditItem,editItem}) => {
  return (
    <div className="container">
      <h3 className='text-center'>Todos List</h3>
      <div className="row">
        {todos.length===0?"no todo to display" : 
        todos.map((todo)=>{
         return <TodoItems title={todo.title} description={todo.description} id={todo.id} handleonDelete={handleonDelete} handlEditItem={handleEditItem} editItem={editItem}/>
      })
    }
      </div>
    </div>
  )
}

export default Todos
