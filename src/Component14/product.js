import { useEffect,useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
const Table = ({id,name,price,type})=> {
    return (
        <table style={{border:'1px solid white',width:'500px',height:'50px',margin:'auto',backgroundColor:'black'}}>
            <tbody>
                <tr>
                    <td style={{border:'1px solid white',width:'150px',height:'50px'}}>{name}</td>
                    <td style={{border:'1px solid white',width:'150px',height:'50px'}}>{price}</td>
                    <td style={{border:'1px solid white',width:'150px',height:'50px'}}>{type}</td>
                    <td style={{border:'1px solid white',width:'150px',height:'50px'}}><Link to={`/users/${id}`}>Show Details</Link></td>
                </tr>
            </tbody>
        </table>
    )
}
export default function AllProduct(){
    var [data,setData] = useState([]);
    useEffect(()=>{
        const config = {
            method: "get",
            url:'http://localhost:3000/Cars'
        }
        axios(config)
        .then(res=>{
            setData([...res.data])
        })
    },[])
    return (
        <>
            <h1>Welcome to all products Page</h1>
            {data.map((Cars)=>(
                <Table id={Cars.id} name={Cars.name} price={Cars.price} type={Cars.type}/>
            ))} 
        </>
    )
}