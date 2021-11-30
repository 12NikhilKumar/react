import {useState} from "react";
const AxiosInput = ({handleSubmit}) => {
    const [text,setText] = useState({
        Task: "",
        Status: ""
    })
    const handleChange = (e) => {
        setText({...text,[e.target.name]:e.target.value})
    }
    const onTaskCreate = () => {
        handleSubmit(text)
    }
    return (
        <>
            <input type="text" placeholder="Enter your Task" onChange={handleChange} name="Task" value={text.Task}/>
            <input type="text" placeholder="Enter your status" onChange={handleChange} name="Status" value={text.Status}/>
            <button onClick={onTaskCreate}>Post your Task</button>
        </>
    )
};
export default AxiosInput