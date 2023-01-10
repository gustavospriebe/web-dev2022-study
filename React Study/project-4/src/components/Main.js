import React, { useEffect, useState } from "react";

export default function Main() {
    const initialState = {
        allMemes: "",
        topText: "",
        bottomText: "",
        rotate: false,
        meme: "https://i.imgflip.com/26am.jpg",
    };

    const [values, setValues] = useState(initialState);
    const randomNumber = Math.floor(Math.random() * values.allMemes.length);

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then((res) => res.json())
            .then((data) =>
                setValues((prevState) => ({
                    ...prevState,
                    allMemes: data.data.memes,
                }))
            );
    }, []);

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
            meme: values.allMemes[randomNumber].url,
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
