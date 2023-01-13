import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useUser() {
    const initialState = {
        user: null,
        isLoading: true,
    };

    const [values, setValues] = useState(initialState);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            setValues((prevState) => ({
                ...prevState,
                user: user,
                isLoading: false,
            }));
        });

        return unsubscribe;
    }, []);

    const { user, isLoading } = values;
    return { user, isLoading };
}
