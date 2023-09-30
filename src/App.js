import Footer from "./myComponents/Footer";
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";
import React, { useState, useEffect } from "react";
import AddTodo from "./myComponents/AddTodo";
import { nanoid } from "nanoid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";

function App() {
    // to edit
    const [editItem, setEditItem] = useState(null);
    const [editId, setEditId] = useState(null);
    const [todos, setTodos] = useState([]);
    const [editValue,setEditValue]=useState(todos);
    const [searchTodo, setSearchTodo] = useState("");


    // useEffect(()=>{
    //   setTodos(getData())
    // },[])
  // delete button
  const handleonDelete = (key) => {
    // const newtodo = todos.filter((todo) => todo.id !== key);
    // setTodos(newtodo);
  };

  //  get data from local storage
  // const getData = () => {
  //   let list = localStorage.getItem("todo-list");
  //   if (list) {
  //      return JSON.parse(localStorage.getItem("todo-list"));
  //   } else {
  //     return [];
  //   }
  // };

  // add data to local variable
  // useEffect(() => {
  //   localStorage.setItem("todo-list", JSON.stringify(todos));
  // }, [todos]);

  // what to add in todo
  const handletodos = ({title, description}) => {
    const newtodo = {
      id: nanoid(),
      title: title,
      description: description,
    };
    const newtodos = [...todos, newtodo];
    setTodos(newtodos);
  };

  // to find id 
  const handleEditItem = (id) => {
    setEditId(id)
  };
  // to change values
  // useEffect(() => {
  //   if(editId){
  //     const intialObj = todos.filter((obj) => obj.id === editId);
  //     setEditItem(intialObj)
  //   }
  // }, [editId]);

  
 
  const handleEditValue=({title,desc})=>{
      console.log(title, desc)
      // const newEdit = editvalue.map((value)=>{
      //   if(value.id === editnew){
      //     value.title =title ;
      //     value.description = desc ;
      //     return value ; 
      //   }else{
      //     return value ;
      //   }
        
      // })
      // console.log(newEdit)
      // setEditvalue(newEdit)
      // setTodos(editvalue)
       }
  return (
    // <Router>
    //   <div className="App">
    //     <Header handleSearchTodo={setSearchTodo} />
    //     <Routes>
    //       <Route path="/about" element={<About />} />

    //       <Route
    //         path="/"
    //         element={
              <>
                <AddTodo
                  handletodos={handletodos}
                  editItem={editItem}
                  handleEditValue={handleEditValue}
                />
                <Todos
                  todos={todos}
                  handleonDelete={handleonDelete}
                  handleEditItem={handleEditItem}
                  editItem={editItem}
                />
              </>
    //         }
    //       />
    //     </Routes>

    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
