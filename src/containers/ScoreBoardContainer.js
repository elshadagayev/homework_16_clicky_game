import { connect } from 'react-redux'
import ScoreBoard from '../components/ScoreBoard/ScoreBoard'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoreBoard)