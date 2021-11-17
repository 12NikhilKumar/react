import {useState} from "react";
import TodoInput from "./todoinput";
import TodoItem from "./todoitem";
const Todo = ()=>{
    const [todo,setTodo] = useState([
        {
            id: 1,
            title: ""
        }
    ]);
    const handleTaskCreate = (title)=>{
        const payload = {
            title: title,
            id: todo.length
        };
        setTodo([...todo,payload]);
    };
    return (
        <>
            <TodoInput onTaskCreate={handleTaskCreate}/>
             {todo.map((todo) =>{
                 return (
                    <TodoItem key={todo.id} title={todo.title}/>
                 );
             })}
        </>
    )
}
export default Todo