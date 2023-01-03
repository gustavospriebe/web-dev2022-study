import React, { useState } from "react";
import data from "../data";

export default function Main() {
    const [meme, setMeme] = useState("");

    const memeURL = () => {
        const randomNumber = Math.floor(Math.random() * data.data.memes.length);

        setMeme(data.data.memes[randomNumber].url);

        console.log(data.data.memes[randomNumber].url);
    };

    return (
        <div className="main">
            <div className="inputs">
                <input
                    type="text"
                    className="first-input"
                    placeholder="Top text"
                ></input>
                <input
                    type="text"
                    className="second-input"
                    placeholder="Bottom text"
                ></input>
            </div>
            <button onClick={memeURL} type="button" className="button">
                Get a new meme image 🖼
            </button>
            <img className="image" src={meme} alt='meme'></img>
        </div>
    );
}
