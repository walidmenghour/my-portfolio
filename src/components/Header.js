import React from 'react';
import '../styles/Header.css';
import {Links} from "../data/links";
export default function Header() {
    return (
        <nav className="navbar">
            <div className="left-section">
                <h1 className={"title_navbar_logo"}>
                    <span className="capitalize highlight">W</span>alid <span className="capitalize highlight">M</span>enghour
                </h1>

            </div>

            <div className="right-section">
                {Links.map((link)=>
                    <a href={link.link}>
                            <h1 className={"title_navbar"}>
                                {link.name}
                            </h1>
                        </a>
                )}
            </div>
        </nav>)
}
