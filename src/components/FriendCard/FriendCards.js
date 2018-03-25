import React from 'react'
import "./FriendCard.css"
import StackGrid, { transitions } from "react-stack-grid"
const { scaleDown } = transitions

export class FriendCards extends React.Component {
    render () {
        return (
            <div className="friends-list">{this.props.children}</div>
        )
    }
}