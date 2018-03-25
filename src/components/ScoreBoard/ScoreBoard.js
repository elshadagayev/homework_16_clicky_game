import React from 'react'
import { connect } from 'react-redux'
import './ScoreBoard.css'

export class ScoreBoard extends React.Component {
    render () {
        return (<span className="score-board">Score: {this.props.score} | Top Score: {this.props.topScore}</span>)
    }
}

const mapStateToProps = state => ({
    score: state.HomePageReducer.score,
    topScore: state.HomePageReducer.topScore,
    scores: state.HomePageReducer.scores
})

export default connect(
    mapStateToProps
)(ScoreBoard)