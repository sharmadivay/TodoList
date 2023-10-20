import React, { useState } from "react";
import "../App.css";
const TodoItems = ({ todos, todo, handleEditItem, handleonDelete }) => {
  const { title, id, description } = todo;
  const [isChecked, setIsChecked] = useState(false);
  
  const handleChecked = (e) => {
    setIsChecked(!isChecked);
    const index = todos.findIndex((obj) => obj.id === id);
    let updatedTodo = { ...todos[index] };
    updatedTodo["isChecked"] = !isChecked;

    const newTodos = [...todos];
    newTodos.splice(index, 1, updatedTodo);
    localStorage.setItem("todo-list", JSON.stringify(newTodos));
    

    // newTodos.splice(index, 1, newtodo)
  };

  return (
    <div className="col-sm-4 mt-5 todoDiv ">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <input
            value={isChecked}
            type="checkBox"
            className="checkbox"
            onClick={handleChecked}
          />

          <h5 className="card-title " id={id}>
            {title}
          </h5>

          <p className="card-text">{description}</p>
          <div className="button_div">
            <button
              type="button"
              className="btn btn-outline-danger "
              onClick={() => {
                handleonDelete(id);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-outline-danger  "
              onClick={() => {
                handleEditItem(id);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
