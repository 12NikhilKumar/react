import {useState} from "react";
import Button from "./button";
const TodoInput = ({onTaskCreate})=>{
    const [text,setText] = useState("");
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = ()=>{
        onTaskCreate(text)
    }
    return(
        <div>
            <input type="text" placeholder="add Something" value={text} onChange={handleChange}/>
            <Button title="Add to the list" onClick={handleClick}/>
        </div>
    )
}
export default TodoInput
