
import Footer from './myComponents/Footer';
import Header from './myComponents/Header';
import Todos from './myComponents/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './myComponents/AddTodo';
import { nanoid } from "nanoid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import About from './About';


function App() {
  // delete button 
  const handleonDelete = (key) => {
    const newtodo = todos.filter((todo) => todo.id !== key);
    setTodos(newtodo);
  }
  const [searchTodo, setSearchTodo] = useState('');

  //  get data from local storage
  const getDate = () => {
    let list = localStorage.getItem('todo-list')
    if (list) {
      return JSON.parse(localStorage.getItem('todo-list'));
    }
    else {
      return [];
    }
  }
  const [todos, setTodos] = useState(getDate());

  // add data to local variable
  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos))
  }, [todos])

  // what to add in todo
  const addTodos = (title, description) => {
    const newtodo = {
      id: nanoid(),
      title: title,
      description: description,
    }
    const newtodos = [...todos, newtodo]
    setTodos(newtodos)
  }
  // to edit 
  const [editItem,setEditItem]=useState(true)
  const [editnew,setEditNew]= useState('')
  const handleEditItem =(id)=>{
     let newEditItem =todos.find((e)=>{
      return e.id===id
     })
     
     setEditItem(false)
     
     setEditNew(newEditItem)
    
  }
  return (
    <Router>
    <div className="App">
      <Header handleSearchTodo={setSearchTodo} />
      <Routes>
        <Route path="/about" element={<About/>}/>
          
        

        <Route path="/" element={<><AddTodo handletodos={addTodos} editItem=
        {editItem} handleEditItems={editnew} />
          <Todos todos={todos.filter((todo) => todo.title.toLowerCase().includes(searchTodo))} handleonDelete={handleonDelete} handleEditItem={handleEditItem} editItem={editItem}/></> }/>
         
       
      </Routes>


      <Footer />
    </div>
    </Router>
  );
}

export default App;
