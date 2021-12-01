import {useState} from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
const Carinput = () => {
    const [data,setData] = useState({
        id: uuid(),
        name:"",
        type:"",
        year:"",
        price:""
    });
    const handleChange = (e) => {
        setData({...data,[e.target.name]: e.target.value})
    }
    const postData = () => {
        const config = {
            method: 'post',
            url: 'http://localhost:3000/Orders',
            data: data
        }
        axios(config)
    }
    return (
        <div style={{width:'600px', height:'600px',backgroundColor:'white',border:'1px solid black',color:'black',margin:'auto'}}>
            <input type="text" placeholder="name of car" value={data.name} name="name" onChange={handleChange}/>
            <br/>
            <input type="text" placeholder="type of car" value={data.type} name="type" onChange={handleChange}/>
            <br/>
            <input type="text" placeholder="year of car" value={data.year} name="year" onChange={handleChange}/>
            <br/>
            <input type="text" placeholder="price of car" value={data.price} name="price" onChange={handleChange}/>
            <br/>
            <br/>
            <button onClick={postData}>POST CAR DETAILS</button>
        </div>
    )
}
export default Carinput;