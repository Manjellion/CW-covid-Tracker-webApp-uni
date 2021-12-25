import React from 'react'
import Css from './navbar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={Css}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/graph">Graph</Link></li>
                    <li><Link to="/edit">Edit</Link></li>
                    <li><Link to="/form">Form</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
