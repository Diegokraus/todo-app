import styles from './styles.module.css'

export function Task(props){
    return(
        <div className={styles.container}>
            <p className={`${styles.title} ${props.task.isCompleted && styles.completed}`}> {props.task.id}. {props.task.title} {props.task.isCompleted}</p>
            {!props.task.isCompleted && (
                <button onClick={() => props.handleCompleteTask(props.task.id)} className={styles.button}>ok</button>
            )}
        </div>
    )
}