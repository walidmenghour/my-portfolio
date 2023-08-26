import React from 'react';
import "../App.css";

export default function SectionTitle(props) {
    return (
        <div>
            <h1 className="header_title">{props.title}</h1>
        </div>
    );
}
