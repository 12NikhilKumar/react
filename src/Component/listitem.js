import React from "react";
function ListItem({data,handleDelete,updateStatus}){
    return(
        <ul>
            {
                data.map(item =>
                    <li key={item.id}>{item.title} - {item.description} - {item.status} - <button onClick={()=>handleDelete(item.id)}>Delete</button> - <button onClick={()=>updateStatus(item.id)}>update</button></li>
                    )
            }
        </ul>
    );
}
export default ListItem;