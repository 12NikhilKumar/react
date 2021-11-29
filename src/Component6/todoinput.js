import {useState} from 'react';
const Todoinput = ({onTaskCreate}) => {
    const [input,setInput] = useState({
        Task:"",
        Status:""
    });
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = () => {
        onTaskCreate(input)
    }
    return (
        <>
            <input type="text" placeholder="task" name="Task" value={input.Task} onChange={handleChange}/>
            <input type="text" placeholder="status" name="Status" value={input.Status} onChange={handleChange}/>
            <button onClick={handleClick}>submit your details</button>
        </>
    )
}
export default Todoinput;