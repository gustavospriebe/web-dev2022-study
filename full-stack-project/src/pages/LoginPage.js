import { useState } from "react";

export default function LoginPage() {
    const initialState = {
        email: "",
        password: "",
        error: "",
    };

    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    console.log(values);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                    ></input>
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    ></input>
                </label>
                <button>Login</button>
            </form>
        </>
    );
}
