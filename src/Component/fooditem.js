import styles from './fooditem.module.css';
function FoodItem({data,handleComplete}){
    return (
        <ul>
            {
                data.map(item =>
                <li className={item.status === "complete" ? `${styles.green}`: `${styles.red}`} key={item.id} onClick={()=>handleComplete(item.id)}>{item.title}-{item.status}</li>
                )
            }
        </ul>
    )
}
export default FoodItem;