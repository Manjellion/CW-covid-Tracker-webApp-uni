import React from 'react'
import Css from './navbar.module.css'

const nvbar = () => {
    return (
        <div className = {Css.container}>
            <ul>
                <li>
                    <a href="/my-app/src/App.js">Home</a>
                </li>
                <li>
                    <a href="/my-app/src/components/Cards/Cards.jsx">Stats</a>
                </li>
                <li>
                    <a href="/my-app/src/components/Chart/Chart.jsx">Info</a>
                </li>
            </ul>
        </div>
    )
}

export default nvbar
