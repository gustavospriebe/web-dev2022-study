import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    // Go to another page
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        
        try {
            e.preventDefault();
            await signInWithEmailAndPassword(
                getAuth(),
                values.email,
                values.password
                );
                
                navigate("/articles");
        } catch (error) {
            setValues((prevState) => ({
                ...prevState,
                error: error,
            }));

            alert(error);
        }
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
            <Link to="/register">Click here to create a new account</Link>
        </>
    );
}
