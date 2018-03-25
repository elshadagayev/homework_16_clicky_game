import { combineReducers } from 'redux'
import HomePageReducer from './HomePageReducer'
import ScoreHistoryReducer from './ScoreHistoryReducer'
import ScoreBoardReducer from './ScoreBoardReducer'
 
export default combineReducers({
  HomePageReducer,
  ScoreHistoryReducer,
  ScoreBoardReducer
})