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
    const onAdd = (e)=>{
        e.preventDefault();
        onSubmit(state);
    }
    return (
        <form onSubmit={onAdd}>
            <input placeholder="Name" name="title" value={state.title} onChange={handleChange}/>
            <input placeholder="Description" name="description" value={state.description} onChange={handleChange}/>
            <input type="submit" value="add"></input>
            <button onClick={showActiveList}>showActiveList</button>
        </form>    
    )
}
export default ListInput;