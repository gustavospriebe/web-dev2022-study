import styles from "./App.module.css";
import Column from "./components/Column";

function App() {
    return (
        <div className={styles.app}>
            <Column state="PLANNED" />
            <Column state="ONGOING" />
            <Column state="DONE" />
        </div>
    );
}

export default App;
