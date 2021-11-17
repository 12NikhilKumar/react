import {useState} from "react";
import TodoInput from "./todoinput";
import TodoItem from "./todoitem";
import Header from "./header";
const Todo = () => {
    const [todos,SetTodos] = useState([{
        id: 1,
        title: "default",
        status: false
    }]);
    const handleTaskCreate = (title) =>{
        const payload = {
            title: title,
            status: false,
            id: todos.length + 1
        };
        SetTodos([...todos,payload]);
    };
    const handleDelete = (id) => {
        SetTodos(
            todos.filter(item => item.id !== id)
        )
    }
    return (
        <>
            <Header title="Todo-List"/>
            <TodoInput onTaskCreate={handleTaskCreate}/>
            {todos.map((todo) =>{
                return (
                    <TodoItem key = {todo.id} title={todo.title} status={todo.status} id={todo.id} handleDelete={handleDelete}/>
                )
            })}
        </>
    )
}
export default Todo