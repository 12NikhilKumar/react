import {useState} from "react";
import ListInput from "./listInput"
import ListItem from "./listitem"
const List = ()=>{
    const [list,setList] = useState([]);
    const handleSubmit = ({title,description})=>{
        const payload = {
            id: list.length+1,
            title,
            description,
            status: "offline"
        }
        setList([...list,payload]);
    }
    const handleDelete = (id)=>{
        console.log(id);
        setList(list.filter((item)=> item.id !== id))
    }
    const handleUpdate = (id)=>{
        const updateList = list.map(item=> item.id === id && item.status === "active"?{...item,status:"offline"}:{...item,status:"active"})
        setList(updateList)
    }
    const activeList = (id)=>{
        setList(list.filter((item)=> item.status === "active"))
    }
    return(
        <>
        <ListInput onSubmit={handleSubmit} showActiveList={activeList}/>
        <ListItem  data={list} handleDelete={handleDelete} updateStatus={handleUpdate}/>
        </>
    )
}
export default List;