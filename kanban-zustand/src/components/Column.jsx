import styles from "./Column.module.css";
import Task from "./Task";

export default function Column({ state }) {
    return (
        <div className={styles.column}>
            <p>{state}</p>
            <Task title="Todo" />
        </div>
    );
}
