import { useLocation } from "react-router";

export default function Confirmation() {
    const { state } = useLocation();

    return (
        <div className="container">
            <h1>Thank You!</h1>
            <p>You're now registered for Red30 Tech.</p>
            {state && (
                <>
                    <p>Welcome {state.name}!</p>
                    <p>We sent more informations to {state.email}.</p>
                </>
            )}
        </div>
    );
}
