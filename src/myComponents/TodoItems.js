import React from 'react'
import "../App.css"
const TodoItems = ({todo,handlEditItem,handleonDelete}) => {
  const {title,id,description} = todo;
  return (
    
    <div className='col-sm-4 mt-5 todoDiv '>
      <div className="card"  style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title" id={id}>{title}</h5>
    
    <p className="card-text">{description}</p>
    <div className='button_div'>
      
    
    <button type="button" className="btn btn-outline-danger " onClick={()=>{handleonDelete(id)}} >Delete</button>
    <button type="button" className="btn btn-outline-danger  " onClick={()=>{handlEditItem(id)}
    }>Edit</button>
    </div>
  </div>
</div>

    </div>
  
  )
}

export default TodoItems


