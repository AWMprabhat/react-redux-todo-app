import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateTodoSuccess } from '../Redux/action'
import { updateTodoRequest } from '../Redux/action'
import { updateTodoFailure } from '../Redux/action'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const Editpages = () => {
    const [data, setdata] = useState("")
    const navigate=useNavigate();
    const dispatch= useDispatch();
    const {id}=useParams();

      const updateTodo=(id,data)=>{
        dispatch(updateTodoRequest());
        axios.patch(`http://localhost:8080/todos/${id}`,{title:data})
        .then((r)=>{
            dispatch(updateTodoSuccess(r.data))
            navigate(`/`)
        })
        .catch((e)=>dispatch(updateTodoFailure(e)))
    }
    const backToHomepage=()=>{
        navigate("/")
    }

  return (
    <div>
        <input type="text" onChange={(e)=>setdata(e.target.value)} />
        <button onClick={()=>{updateTodo(id,data)}} >update</button>
        <button onClick={backToHomepage}>back to homepage</button>
    </div>
  )
}
