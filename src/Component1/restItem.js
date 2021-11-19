import styles from './restItem.module.css';
const RestItems = props =>{
    const  {
         cost,
         name,
         voteCount,
         reviewCount,
         rating,
         imageUrl,
         paymentMethods,
    } = props.data;
    return (
        <div className={styles.flex}>
            <img className={styles.img} src={imageUrl} alt={name}/>
            <div className={styles.desc}>
                <p>name - {name}</p>
                <p>vote - {voteCount}</p>
                <p>review - {reviewCount}</p>
                <p>price - {cost}</p>
            </div>
            <span className={styles.rate}>
                 <p>rating  {rating}</p>
                 {paymentMethods.cash && <p style={{color:"brown"}}>Accepts Cash</p>}
                 {paymentMethods.card && <p style={{color:"orange"}}>Accepts Card</p>}
                 {paymentMethods.upi && <p style={{color:"black"}}>Accepts upi</p>}
            </span>
        </div>
    );
};
export default RestItems;