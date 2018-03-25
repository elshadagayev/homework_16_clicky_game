import { connect } from 'react-redux'
import ScoreHistory from '../components/Pages/ScoreHistory'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScoreHistory)