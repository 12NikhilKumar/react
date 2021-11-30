import AxiosInput from "./axioinput"
import {useState,useEffect} from "react";
import axios from "axios";
const Axios = () =>{
    let [state,setState] = useState({});
    let [data,setData] = useState([]);
    const onSubmit = (payload) => {
        state = payload;
        setState(state);
        const config = {
            method: 'POST',
            url: 'http://localhost:3000/Tasks',
            data: state
        };
         axios(config)
         return getData()
    }
    const getData = () => {
        const config = {
            method: 'get',
            url: 'http://localhost:3000/Tasks'
        };
        return axios(config);
    }
    useEffect(() => {
        getData()
        .then((res) =>{
            console.log(res.data);
            data = res.data;
            setData([...data]);
        })
    },[state])
    const deleteTasks = (id) => {
        setData(data.filter((Task)=> Task.id !== id))
    }
    const togleTasks = () => {
    }
    return (
        <>
            <AxiosInput handleSubmit={onSubmit}/>
            {data.map((Tasks)=>(
                <div key={Tasks.id}>{Tasks.Task} :: {Tasks.Status} :: {<button onClick={()=>deleteTasks(Tasks.id,Tasks.Task)}>Delete tasks</button>} :: {<button onClick={()=>togleTasks(Tasks.id)}>Toggle status</button>}</div>
            ))}
        </>
    )
}
export default Axios