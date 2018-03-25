import friends from '../friends.json'

export const INCREMENT_SCORE = "homepage/INCREMENT_SCORE"
export const RESET_SCORE = "homepage/RESET_SCORE"
export const SHUFFLE_FRIENDS = "homepage/SHUFFLE_FRIENDS"

const initialState = {
    score: 0,
    topScore: 0,
    scores: [],
    friends
}

export default (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_SCORE:
            state.friends[action.payload].clicked = true;
            return {
                ...state,
                score: state.score+1
            }
            break;
        case RESET_SCORE:
            state.scores.push({
                score: state.score,
                date: Date.now()
            });
            state.topScore = state.score > state.topScore ? state.score : state.topScore;
            state.score = 0;
            state.friends.map(friend => {
                friend.clicked = false;
                return friend;
            })
            break;
        case SHUFFLE_FRIENDS:
            state.friends = shuffle(state.friends);
            break;
        default:
            return state
    }

    return {...state};
}

const shuffle = a => {
    let b = Object.assign([], a);
    for(let i = 0; i < b.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [b[i], b[j]] = [b[j], b[i]]
    }

    return b;
}