import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../Redux/action';
import { useState } from 'react';

export const AddTodo = () => {
    const dispatch=useDispatch();
    const [todo, setTodo] = useState("");

    const addTodo=(payload)=>{
        dispatch(addTodoRequest())
        axios.post("http://localhost:8080/todos",payload)
        .then((r)=>{
            dispatch(addTodoSuccess(r.data))
        })
        .catch((e)=>dispatch(addTodoFailure(e)));
    }


    const handleAdd=()=>{
        if(todo)
        {
            const payload = { title: todo, status: false };
            addTodo(payload);
            setTodo("");
        }
    }
  return (
    <div>
    <h3>add todo</h3>
    <input type="text" value={todo} onChange={(e)=>(setTodo(e.target.value))} />
    <button onClick={handleAdd}>add</button>
    </div>
  )
}

