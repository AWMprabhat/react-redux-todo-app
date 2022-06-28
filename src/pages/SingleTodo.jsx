import axios from 'axios'
import  { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { removeTodoFailure, removeTodoRequest, removeTodoSuccess, toggleTodoFailure, toggleTodoRequest, toggleTodoSuccess } from '../Redux/action'


export const SingleTodo = () => {

    const todos=useSelector((state)=>state.todos)
    const dispatch=useDispatch()
    const {id}=useParams();
    const [currentTodo,setCurrentTodo]=useState({...todos})
    const navigate=useNavigate()

    const toggleStatus=(id,newStatus)=>{
        dispatch(toggleTodoRequest());
        axios.patch(`http://localhost:8080/todos/${id}`,{status:newStatus})
        .then((r)=>dispatch(toggleTodoSuccess(r.data)))
        .catch((e)=>dispatch(toggleTodoFailure(e)))
    }

    const removeTodo=(id)=>{
        dispatch(removeTodoRequest())
        axios.delete(`http://localhost:8080/todos/${id}`)
        .then((r)=>{
            dispatch(removeTodoSuccess(id))
            navigate("/")
        })
        .catch((e)=> dispatch(removeTodoFailure(e)))
        
    }


    useEffect(() => {
     let currentTodo=todos.find((item)=>item.id===Number(id))
      setCurrentTodo(currentTodo);
    }, [todos,id])
    

  return (
    <div>
     <h3>{currentTodo?.title} {currentTodo?.status ? "True" :"False"}</h3>
     <button onClick={()=> toggleStatus(currentTodo.id,!currentTodo.status)}>toggle</button>
     <button onClick={()=> removeTodo(currentTodo.id)}>delete</button>
     <Link to={`/todo/${id}/edit`}>
         <button>edit</button>
     </Link>
    </div>
  )
}
