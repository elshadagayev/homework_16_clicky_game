import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'
import ScoreBoard from '../../containers/ScoreBoardContainer'
import { connect } from 'react-redux'

export class MainMenu extends React.Component {
    
    render () {
        return (
            <nav className="main-menu">
                <ul>
                    <li className="logo">Clicky Game</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/scores"}>Scores</Link></li>
                    <li><ScoreBoard /></li>
                </ul>
            </nav>
        )
    }
}