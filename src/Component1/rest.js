import data from "./db.json";
import RestItems from "./restItem";
import Navbar from "./navbar";
import styles from "./rest.module.css";
import {useState} from "react";
function Rest(){
    const [state,setState] = useState(0);
    const handleRating = (rating) => {
         const filterRating = rating;
         setState(filterRating);
    }
    const [text,setText] = useState("");
    const handlePayment = (options) => {
        const payment = options;
        setText(payment);
        console.log(payment);
    }
    return(
        <>
        <Navbar handleRating={handleRating} handlePayment={handlePayment}/>
        <div className={styles.grid}>
        {data.filter(item => item.rating > state ).map(item =>  (
            <RestItems key={item.id} data={item}/>
        ))}
        </div>
        </>  
    )
}
export default Rest;