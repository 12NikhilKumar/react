import {useState,useEffect} from 'react';
import axios from 'axios';
import Carcard from './carcard';
import Carinput from './carinput';
const Car = () => {
    let [data,setData] = useState([]);
    const [loding,setLoding] = useState(true);
    const [query,setQuery] = useState({
        "year":"",
        "type":""
    });
    const handleChange = (e) => {
        setQuery({...query,[e.target.name]: e.target.value})
    };
    const SearchPost = () =>{
        const config = {
            method: 'get',
            url: 'http://localhost:3000/Cars',
            params:query
        }
        axios(config)
        .then((res) =>{
            data = res.data;
            setData([...data]);
        })
    }
    const getData = () => {
        const config = {
            method: 'get',
            url: 'http://localhost:3000/Cars'
        };
        return axios(config);
    }
    const sortData = () => {
        let config = {
            method: 'get',
            url: 'http://localhost:3000/Cars?_sort=price&_order=asc'
        }
        axios(config)
        .then((res) => {
            data = res.data;
            setData([...data]);
        })
    }
    useEffect(() => {
        getData()
        .then((res) =>{
            console.log(res.data);
            data = res.data;
            setData([...data]);
        })
    },[])
    return (
        <>
            <input type="text" name="year" value={query.year} onChange={handleChange} placeholder="enter year"/>
            <input type="text" name="type" value={query.type} onChange={handleChange} placeholder="enter type"/>
            <button onClick={sortData}>Sort by Price</button>
            <button onClick={SearchPost}>Search product</button>
            {data.map((Cars) => (
                <Carcard id={Cars.id} name={Cars.name} url={Cars.url} price={Cars.price} year={Cars.year} type={Cars.type}/>
            ))}
            <Carinput/>
        </>
    )
}
export default Car