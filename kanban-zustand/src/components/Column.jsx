import { useState } from "react";
import { useStore } from "../../store";
import styles from "./Column.module.css";
import Task from "./Task";
import { shallow } from "zustand/shallow";

// eslint-disable-next-line react/prop-types
export default function Column({ status }) {
    const [text, setText] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const tasks = useStore(
        (store) => store.tasks.filter((task) => task.status == status),
        shallow
    );

    const addTask = useStore((task) => task.addTask);

    function handleNewTask(text, status, event) {
        event.preventDefault();

        addTask(text, status);
    }

    console.log(tasks);

    return (
        <div className={styles.column}>
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
                <Task
                    title={task.title}
                    key={task.title}
                    status={task.status}
                />
            ))}
            {isOpen && (
                <div className={styles.modal}>
                    <form className={styles.modalContent}>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                if (text.length === 0) {
                                    return;
                                }
                                addTask(text, status);
                                setText("");
                                setIsOpen(false);
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
