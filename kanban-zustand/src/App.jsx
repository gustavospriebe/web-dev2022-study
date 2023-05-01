import styles from "./App.module.css";
import Column from "./components/Column";

function App() {
    return (
        <div className={styles.app}>
            <Column status="PLANNED" />
            <Column status="ONGOING" />
            <Column status="DONE" />
        </div>
    );
}

export default App;
