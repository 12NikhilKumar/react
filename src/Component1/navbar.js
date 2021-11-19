import styles from './navbar.module.css'
const Navbar = ({handleRating,handlePayment})=>{
    return (
        <span className={styles.flex}>
            <button onClick={()=>handleRating(4)}>4Star</button>
            <button onClick={()=>handleRating(3.5)}>Below 4star</button>
            <button onClick={()=>handleRating(0)}>all Prods</button>
            <button onClick={()=>handlePayment("card")}>Card</button>
            <button onClick={()=>handlePayment("cash")}>Cash</button>
            <button onClick={()=>handlePayment("upi")}>online</button>
        </span>
    )
}
export default Navbar;