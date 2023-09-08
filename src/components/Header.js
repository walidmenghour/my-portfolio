import React from 'react';
import '../styles/Header.css';

export default function Header() {
    let Links = [
       // {name:"Home" ,link:"home"},
        {name:"01.About Me" ,link:"#About"},
        {name:"02.Skills" ,link:"#Skills"},
        {name:"03.Education" ,link:"#Education"},
        {name:"04.Projects" ,link:"#Projects"},
        {name:"05.Contact Me" ,link:"#Contact"},
    ]
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
