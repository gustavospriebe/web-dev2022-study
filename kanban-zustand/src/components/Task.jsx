import classNames from "classnames";
import styles from "./Task.module.css";
import { BiTrash } from "react-icons/bi";
import { useStore } from "../../store";

// eslint-disable-next-line react/prop-types
export default function Task({ title, status }) {
    const deleteTask = useStore((task) => task.deleteTask);
    const setDraggedTask = useStore((task) => task.draggableTask);

    return (
        <div
            className={styles.task}
            draggable
            onDragStart={() => setDraggedTask(title)}
        >
            <div>{title}</div>
            <div className={styles.bottomWrapper}>
                <div>
                    <BiTrash
                        className={styles.trash}
                        onClick={() => deleteTask(title)}
                    />
                </div>
                <div
                    className={classNames(
                        styles.status,
                        status === "PLANNED"
                            ? styles.PLANNED
                            : status === "ONGOING"
                            ? styles.ONGOING
                            : styles.DONE
                    )}
                >
                    {status}
                </div>
            </div>
        </div>
    );
}
