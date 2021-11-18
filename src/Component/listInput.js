import {useState} from "react";
const ListInput = ({onSubmit,showActiveList})=>{
    const [state,setState] = useState({
        id:1,
        title: "",
        description: "",
        status: ""
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const onAdd = ()=>{
        onSubmit(state);
    }
    return (
        <div>
            <input placeholder="Name" name="title" value={state.title} onChange={handleChange}/>
            <input placeholder="Description" name="description" value={state.description} onChange={handleChange}/>
            <button onClick={onAdd}>Add</button>
            <button onClick={showActiveList}>showActiveList</button>
        </div>    
    )
}
export default ListInput;