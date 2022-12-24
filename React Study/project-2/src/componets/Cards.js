import photo from "../images/card1.png";
import star from "../images/star.png";
import React from "react"
import ReactDOM from "react-dom"

export default function Cards() {
    return (
        <div className="card">
            <img src={photo} alt="card" className="card--photo"></img>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"></img>
                <p className="card--rank">5.0</p>
                <p className="card--review--count gray">(6) •</p>
                <p className="card--country gray">USA</p>
            </div>
            <p className="card--title">Life lessons with Katie Zaferes</p>
            <p className="card--price">
                <span className="bold">From $136</span> / person
            </p>
        </div>
    );
}
