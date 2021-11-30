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
    return (
        <>
            <AxiosInput handleSubmit={onSubmit}/>
            {data.map((Tasks)=>(
                <div>{Tasks.Task}</div>
            ))}
        </>
    )
}
export default Axios