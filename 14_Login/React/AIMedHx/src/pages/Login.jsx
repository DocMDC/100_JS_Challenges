import React, {useState} from "react"
import { Link } from "../../node_modules/react-router-dom"

export default function Login () {
    const [inputData, setInputData] = useState({username: '', password: ''})
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        setInputData(prevData => ({...prevData, [name]: value}))
    }

    function handleLogin() {
        setIsLoggedIn(true)
    }

    console.log()

    return (
        <div className="login__container">
            <Link to='*' className="login__logo__link">
                <div className="login__logo">AIMedHx</div>
            </Link>
            <form className="login__form">
                <h4>Login</h4>
                <input className="login__username" placeholder="Username" name="username" value={inputData.username} onChange={handleChange}/>
                <input className="login__password"placeholder="Password" name="password" value={inputData.password} onChange={handleChange}/>
                <br />
                <Link to='/software'>
                    <button className="login__button" onClick={handleLogin}>Login</button>
                </Link>
            </form>
        </div>
    )
}