import React from 'react'
import styles from './Card.module.css';
function Card({url,title,description,calories,price,temp}){
    return (
        <div className={styles.card}>
            <img src={url} alt="logo"/>
            <h1>{title}</h1>
            <span>{description}</span>
            <div className={styles.flex}>
                <div>{calories}</div>
                <div>{price}</div>
                <div>{temp}</div>
            </div>
        </div>
    )
}
export default Card