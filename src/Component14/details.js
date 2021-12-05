import { useParams } from "react-router"
import {useState,useEffect} from "react";
import Carcard from "../Component10/carcard"
import axios from "axios";
export default function Productinfo(){
    const {id} = useParams()
    const [data,setData] = useState([]);
        useEffect(()=>{
            const config = {
                method: "get",
                url: `http://localhost:3000/Cars?id=${id}`
            }
            axios(config)
            .then((res)=>{
                setData(res.data)
            },[])
        })
    return (
        <>
            {data.map((Cars)=>(
                <Carcard id={Cars.id} name={Cars.name} url={Cars.url} price={Cars.price} year={Cars.year} type={Cars.type}/>
            ))}
        </>
    )
}