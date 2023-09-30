import React, { useState, useEffect } from 'react'
import { nanoid } from "nanoid";
import AddTodo from './AddTodo';
import Todos from './Todos';

function List() {
    const [editItem, setEditItem] = useState(null);
    const [editId, setEditId] = useState(null);
    const [todos, setTodos] = useState([]);
    // const [editValue, setEditValue] = useState(todos);
    // const [searchTodo, setSearchTodo] = useState("");


    useEffect(() => {
        setTodos(getData())
    }, [])
    // delete button
    const handleonDelete = (key) => {
        // const newtodo = todos.filter((todo) => todo.id !== key);
        // setTodos(newtodo);
    };

    //  get data from local storage
    const getData = () => {
        let list = localStorage.getItem("todo-list");
        if (list) {
            return JSON.parse(localStorage.getItem("todo-list"));
        } else {
            return [];
        }
    };

    // add data to local variable
    // useEffect(() => {
    //   localStorage.setItem("todo-list", JSON.stringify(todos));
    // }, [todos]);

    // what to add in todo
    const handletodos = ({ title, description }) => {
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
    useEffect(() => {
        if (editId) {
            const intialObj = todos.filter((obj) => obj.id === editId);
            setEditItem(intialObj[0])
        }
    }, [editId]);



    const handleEditValue = ({ title, desc }) => {
        // const newEdit = editvalue.map((value)=>{
        //   if(value.id === editnew){
        //     value.title =title ;
        //     value.description = desc ;
        //     return value ; 
        //   }else{
        //     return value ;
        //   }

        // })
        const index = todos.findIndex((obj) => obj.id === editId);

    }
    return (
        <>
            <AddTodo
                handletodos={handletodos}
                setEditItem={setEditItem}
                editItem={editItem}
                handleEditValue={handleEditValue}
            />
            <Todos
                todos={todos}

                handleonDelete={handleonDelete}
                handleEditItem={handleEditItem}
                editItem={editItem}
                setEditItem={setEditItem}
            />
        </>
    )
}

export default List