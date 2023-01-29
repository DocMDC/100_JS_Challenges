import React from "react"

export default function Menu(props) {
    return (
        <div className="menu-container">
            <h1>Quizzical</h1>
            <h4>Description</h4>
            <button onClick={props.handleClick}>Start</button>
        </div>
    )
}