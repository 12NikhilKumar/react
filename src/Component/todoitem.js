const TodoItem = ({id,status,title,handleDelete}) => {
    return (
        <div>
            <span>{`${title}-${status}`}</span>
            <button onClick={()=>handleDelete(id)}>X</button>
        </div>
    )
}
export default TodoItem