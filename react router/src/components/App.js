import MainLayout from "../layout/MainLayout";
import Routing from "./Routing";

function App() {
    return (
        <div className="app">
            <MainLayout>
                <Routing />
            </MainLayout>
        </div>
    );
}

export default App;
