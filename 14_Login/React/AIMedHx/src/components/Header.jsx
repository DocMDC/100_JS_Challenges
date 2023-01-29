import React from "react"
import { Link } from "../../node_modules/react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"

export default function Header() {
    return (
        <header className='header'>
            <div className="header__container">
                <Link to='*' className="header__home__link">
                    <p className="header__home__text">AIMedHx</p>
                </Link>
                <Link to='/login' className="header__login__link">
                    <p className="header__login__text">Login</p>
                </Link>
            </div>
        </header>
    )
}