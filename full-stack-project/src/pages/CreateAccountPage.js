import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccountPage() {
    const initialState = {
        email: "",
        password: "",
        error: "",
        confirmPassword: "",
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
        e.preventDefault();
        try {
            if (values.password === values.confirmPassword) {
                await createUserWithEmailAndPassword(
                    getAuth(),
                    values.email,
                    values.password
                    );
                    alert("Account created!");
                    navigate("/login");
                } else {
                    return alert("Password dont match");
                }
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
            <h1>Create New Account</h1>
            {values.error && <p className="error">{values.error.message}</p>}
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
                <label>
                    Confirm Password
                    <input
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                    ></input>
                </label>
                <button>Register</button>
            </form>
        </>
    );
}
