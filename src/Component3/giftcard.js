import styles from './giftcard.module.css';
function Giftcard({date,title,subtitle,description,color}){
    return (
        <div className={styles.box} style={{backgroundColor:color}}>
            <div>{date}</div>
            <button className={styles.button}>Case Study</button>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Giftcard;