import { useState } from "react";
import { useStore } from "../../store";
import styles from "./Column.module.css";
import Task from "./Task";
import { shallow } from "zustand/shallow";
import classNames from "classnames";

// eslint-disable-next-line react/prop-types
export default function Column({ status }) {
    const [text, setText] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [drop, setDrop] = useState(false);

    const tasks = useStore(
        (store) => store.tasks.filter((task) => task.status == status),
        shallow
    );

    const addTask = useStore((task) => task.addTask);
    const moveTask = useStore((task) => task.moveTask);
    const setDraggedTask = useStore((task) => task.draggableTask);
    const draggedTask = useStore((task) => task.draggedTask);

    function handleNewTask(text, status) {
        if (text.length === 0) {
            return;
        }
        addTask(text, status);
        setText("");
        setIsOpen(false);
    }

    console.log(tasks);

    return (
        <div
            className={classNames(styles.column, drop && styles.drop)}
            onDragOver={(e) => {
                setDrop(true);
                e.preventDefault();
            }}
            onDragLeave={(e) => {
                setDrop(false);
                e.preventDefault();
            }}
            onDrop={() => {
                setDrop(false);
                moveTask(draggedTask, status);
                setDraggedTask(null);
            }}
        >
            <div className={styles.titleWrapper}>
                <p>{status}</p>
                <button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    Add
                </button>
            </div>
            {tasks.map((task) => (
                <Task title={task.title} key={task.id} status={task.status} />
            ))}
            {isOpen && (
                <div className={styles.modal}>
                    <form className={styles.modalContent}>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button onClick={() => handleNewTask(text, status)}>
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
