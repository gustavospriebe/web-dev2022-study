import classNames from "classnames";
import styles from "./Task.module.css";

const STATUS = "PLANNED";

export default function Task({ title }) {
    return (
        <div className={styles.task}>
            <div>{title}</div>
            <div className={styles.bottomWrapper}>
                <div></div>
                <div
                    className={classNames(
                        styles.status,
                        STATUS === "PLANNED"
                            ? styles.PLANNED
                            : STATUS === "ONGOING"
                            ? styles.PLANNED
                            : styles.DONE
                    )}
                >
                    {STATUS}
                </div>
            </div>
        </div>
    );
}
