import React from 'react'
import { connect } from 'react-redux'
import './assets/css/ScoreHistory.css'

export class ScoreHistory extends React.Component {
    render () {
        let { scores } =  this.props;
        scores.sort((a,b) => {
            return b.score - a.score
        });
        return (<div>
            <h1 className="text-center">Scores</h1>
            <table className="table table-striped scores-tbl">
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">Score</th>
                        <th className="text-center">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.length ? scores.map((score, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td className="text-center">{score.score}</td>
                            <td className="text-right">{new Date(score.date).toLocaleString()}</td>
                        </tr>
                    )): (
                        <tr>
                            <td colSpan="3" className="text-center"><strong>There is no score yet</strong></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>)
    }
}

const mapStateToProps = state => ({
    scores: state.HomePageReducer.scores
})

export default connect(
    mapStateToProps
)(ScoreHistory)