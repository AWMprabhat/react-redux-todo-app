import React from 'react'
import { getTodoListsFailure, getTodoListsRequest, getTodoListsSuccess } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useEffect } from 'react';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const Todos = () => {
    const dispatch=useDispatch();
   const todos=useSelector((state)=>state.todos);


    const gettodos=()=>{
        dispatch(getTodoListsRequest());
        axios.get("http://localhost:8080/todos")
        .then((r)=>{
            dispatch(getTodoListsSuccess(r.data));
        })
        .catch((e)=>dispatch(getTodoListsFailure(e)))
    }


    useEffect(() => {
        if(todos?.length===0)
        {
            gettodos();
        }
    }, [])
  return (
    <div>
        Todos
        <div>
            <AddTodo />
            <TodoList todolists={todos} />
            </div>

    </div>

  )
}
