import React from 'react';

export function Header() {
    const nav = ["Pricing", "About", "Contact"];
    const navItems = nav.map((x) => <li>{x}</li>);

    return (
        <nav id="nav">
            <div className="logo">
                <img src="./react-logo.png" />
                <h1>React Facts</h1>
            </div>
            <ul className="nav-items">{navItems}</ul>
            {/* <h3>React Course - Project 1</h3> */}
        </nav>
    );
}