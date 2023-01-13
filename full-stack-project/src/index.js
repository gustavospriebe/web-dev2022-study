import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAc8d4j7klaGMb2rTCN-wvih_0j0ZSmJl4",
    authDomain: "my-react-blog-ee0a7.firebaseapp.com",
    projectId: "my-react-blog-ee0a7",
    storageBucket: "my-react-blog-ee0a7.appspot.com",
    messagingSenderId: "972586428666",
    appId: "1:972586428666:web:b49f679769e46db3c3c143",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
