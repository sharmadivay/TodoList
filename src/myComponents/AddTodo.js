import React, { useState } from "react";

const AddTodo = ({ handletodos, editItem, setEditItem, handleEditValue }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  // const [todoEditTitle, setTodoEditTitle] = useState("");
  // const [todoEditDesc, setTodoEditDesc] = useState("");



  // if(editItem){
  // setTodoTitle(handleEditItems.title);
  // setTodoDesc(handleEditItems.description);
  // }

  const handleTodoTitle = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleTodoDesc = (event) => {
    setTodoDesc(event.target.value);
  };
  //   const  handleTodoEditTitle=(event)=>{

  //     setTodoEditTitle(event.target.event)

  //  }
  //  const  handleTodoEditDesc =(event)=>{

  //   setTodoEditDesc(event.target.event)

  // }

  const handleSubmit = () => {
    if (todoTitle.trim().length > 0) {
      handletodos({
        title: todoTitle,
        description: todoDesc
      });
    }
    setTodoTitle(" ");
    setTodoDesc(" ");
  };


  const handleEditSubmit = () => {

    handleEditValue({
      title: editItem.title,
      desc: editItem.description
    });
    
  }

  return (
    <div className="container">
      {editItem ?
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              value={editItem.title}
              onChange={(e) => {
                const newObj = {
                  id: editItem.id,
                  title: e.target.value,
                  description: editItem.description
                }
                setEditItem(newObj)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              value={editItem.description}
              onChange={(e) => {
                const newObj = {
                  id: editItem.id,
                  title: editItem.title,
                  description: e.target.value
                }
                setEditItem(newObj)
              }}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleEditSubmit}
          >
            Edit Todo
          </button>


        </form>
        :
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              value={todoTitle}
              onChange={handleTodoTitle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              value={todoDesc}
              onChange={handleTodoDesc}
            />
          </div>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Add Todo
          </button>


        </form>
      }
    </div>
  );
};

export default AddTodo;
