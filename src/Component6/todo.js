import {useState,useEffect} from "react";
import Todoinput from "./todoinput";
const Todo = ()=>{
    const [todo,setTodo] = useState([]);
    const [post,setPost] = useState([]);
    const onPost = ({Task,Status}) => {
        const payload = {
            id: post.length+1,
            Task,
            Status
        }
        setPost([...post,payload])
            return fetch(`http://localhost:3000/Tasks`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            })
            .then((res)=>res.json())
            .catch((err)=>{
                console.error(err);
            });
    };
    useEffect(()=>{
        return fetch("http://localhost:3000/Tasks")
        .then((res)=>res.json())
        .then((res)=>{
            setTodo(res);
        })
        .catch((err)=>{
            console.error(err);
        });
    },[])
    return (
        <>
            <Todoinput onTaskCreate={onPost}/>
            {todo.map((Tasks)=>(
                <div>{Tasks.Task}</div>
            ))}
        </>
    )
};
export default Todo;