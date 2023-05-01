import classNames from "classnames";
import styles from "./Task.module.css";

// eslint-disable-next-line react/prop-types
export default function Task({ title, status }) {

    
    return (
        <div className={styles.task}>
            <div>{title}</div>
            <div className={styles.bottomWrapper}>
                <div></div>
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
