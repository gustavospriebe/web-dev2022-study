import { useEffect, useState } from "react";
import getAutoComplete from "./api";
import "./App.css";

function App() {
    const [fruit, setFruit] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const query = async () => {
            if (!fruit) {
                return;
            }
            const result = await getAutoComplete(fruit);
            setData(result);
        };
        query();
    }, [fruit]);

    const handleChange = (e) => {
        e.preventDefault();
        setFruit(e.target.value);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center bg-gray-900">
            <input
                type="text"
                className="mt-24 mb-4"
                onChange={handleChange}
                value={fruit}
            />
            <div className="text-gray-200 flex flex-col gap-2 items-start">
                {!fruit && <p>Show results here</p>}
                {fruit && data.map((fruit) => <p key={fruit}>{fruit}</p>)}
            </div>
        </div>
    );
}

export default App;
