import styles from './todoitem.module.css';
const TodoItem = ({id, title})=>{
    return (
        <div className={styles.span}>
            <span>{title}</span>
            <div className={styles.btn}></div>
        </div>
    )
}
export default TodoItem