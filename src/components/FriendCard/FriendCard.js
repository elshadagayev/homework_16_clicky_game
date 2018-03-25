import React from "react"
import "./FriendCard.css"

export class FriendCard extends React.Component {

  render () {
    return (
      <div className="friend-card" onClick={this.props.handleClick}>
        <img alt="" src={this.props.image} />
      </div>
      );
  }
}
