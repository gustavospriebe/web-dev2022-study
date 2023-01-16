import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const initialValues = {
        data: { hits: [] },
        query: "redux",
        url: "https://hn.algolia.com/api/v1/search?query=redux",
    };

    const [values, setValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const request = async () => {
            const res = await axios(values.url);
            setIsLoading(true);

            setValues((prevState) => ({
                ...prevState,
                data: res.data,
            }));
            setIsLoading(false);
        };

        request();
    }, [values.url]);

    console.log(values.data.hits);

    const list = values.data.hits.map((item) => (
        <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
        </li>
    ));

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setValues((prevState) => ({
            ...prevState,
            url: `https://hn.algolia.com/api/v1/search?query=${values.query}`,
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="query"
                    value={values.query}
                    onChange={handleChange}
                ></input>
                <button type="submit">Search</button>
            </form>
            {isLoading ? <p>Please wait...</p> : <ul>{list}</ul>}
        </>
    );
}

export default App;
