import React from 'react'
import styles from './Card.module.css';
function Card({url,title}){
    return (
        <div className={styles.card}>
            <img src={url} alt="logo"/>
            <h1>{title}</h1>
        </div>
    )
}
export default Card