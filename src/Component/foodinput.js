import {useState} from "react";
function FoodInput({onTaskCreate,showComplete,showUncomplete}){
    const [text,setText] = useState({
        id:1,
        status: "",
        title: ""
    });
    const handleChange = (e) => {
        setText({
            ...text,
            [e.target.name]:e.target.value
        });
    }
    const handleClick = () => {
        onTaskCreate(text);
    }
    return (
        <div>
            <input name="title" type="text" value={text.title} placeholder="add your food item" onChange={handleChange}/>
            <button onClick={handleClick}>Add to yor list</button>
            <button onClick={showComplete}>Show completed food</button>
            <button onClick={showUncomplete}>Show Uncompleted food</button>
        </div>
    )
}
export default FoodInput