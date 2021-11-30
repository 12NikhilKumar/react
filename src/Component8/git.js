import {useState} from "react";
import Card  from "../Component/card";
import axios from "axios";
const Git = ()=>{
    const [text,setText] = useState("");
    let [data,setData] = useState([]);
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleClick = ()=>{
        const config = {
            method: 'get',
            url: `https://api.github.com/search/users?q=${text}`
        }
        axios(config)
        .then((res)=>{
            console.log(res.data.items)
             data = res.data.items;
            setData([...data])
        })

    }
    return (
        <>
            <input type="text" value={text} placeholder="Enter your qurey" onChange={handleChange}/>
            <button onClick={handleClick}>Seach Users</button>
            {data.map( (item) => (
                <Card url={item.avatar_url} title={item.login}/>
            ))}
        </>
    )
}
export default Git