import React from "react"
import { Link } from "../../node_modules/react-router-dom"

export default function Hero() {
    return (
        <div className='hero__container'>
            <p className="hero__title">Quickly Find Accurate & Relevant Patient Information With Our Revolutionary AI Tool</p>
            <p className="hero__subtitle">Innovating Efficiency in Healthcare</p>
            <Link to='./login'>
            <button className='hero__cta'>Sign up</button>
            </Link>
        </div>
    )
}