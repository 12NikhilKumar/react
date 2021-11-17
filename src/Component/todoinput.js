import {useState} from "react";
import Button from "./button";
const TodoInput = ({onTaskCreate})=>{
    const [text,setText] = useState("");
    const handleChange = (e)=>{
        setText(e.target.value);
    };
    const handleClick = ()=>{
        onTaskCreate(text);
    };
    return (
        <div>
            <input type="text" placeholder="add some thing" value={text} onChange={handleChange}/>
            <Button title="submit" onClick={handleClick}/>
        </div>
    )
}
export default TodoInput