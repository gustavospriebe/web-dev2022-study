import React, { useState } from "react";
import data from "../data";

export default function Main() {
    const randomNumber = Math.floor(Math.random() * data.data.memes.length);
    const randomMeme = data.data.memes[randomNumber].url;

    const initialState = {
        meme: randomMeme,
        topText: "",
        bottomText: "",
        rotate: false,
    };

    const [values, setValues] = useState(initialState);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setValues((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        setValues((prevState) => ({
            ...prevState,
            meme: randomMeme,
        }));
    }

    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input
                        type="text"
                        className="first-input"
                        placeholder="Top text"
                        name="topText"
                        value={values.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="second-input"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={values.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name="rotate"
                        id="rotate"
                        checked={values.rotate}
                        onChange={handleChange}
                    />
                    <label htmlFor="rotate">Rotate Image</label>
                </div>
                <button className="button">Get a new meme image 🖼</button>
            </form>
            <div className="memeImage">
                <img
                    className={`image ${values.rotate && "rotate"}`}
                    src={values.meme}
                    alt="meme"
                />
                <p className="meme-text top-text">{values.topText}</p>
                <p className="meme-text bottom-text">{values.bottomText}</p>
            </div>
        </div>
    );
}
