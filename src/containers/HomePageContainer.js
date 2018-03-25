import { connect } from 'react-redux'
import HomePage from '../components/Pages/HomePage'
import { 
    INCREMENT_SCORE, 
    RESET_SCORE, 
    SHUFFLE_FRIENDS 
} from '../reducers/HomePageReducer'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    incrementScore: (index) => dispatch({
        type: INCREMENT_SCORE,
        payload: index
    }),
    resetScore: () => dispatch({
        type: RESET_SCORE
    }),
    shuffleFriends: () => dispatch({
        type: SHUFFLE_FRIENDS
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)