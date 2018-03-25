import React from 'react'
import { FriendCards, FriendCard } from '../FriendCard'
import './assets/css/HomePage.css'
import $ from 'jquery'
import { connect } from 'react-redux'
import { Slider } from '../Slider'

export class HomePage extends React.Component {
    constructor () {
        super()
        this.state = {
            result: {
                text: "Click an image to begin!",
                guessed: null
            }
        }
    }
    render() {
        const { friends } = this.props;
        return (
            <div>
                <Slider result={this.state.result} />
                <FriendCards>
                    {friends.map((friend, index) => (
                        <FriendCard 
                            image={friend.image}
                            index={index}
                            key={index}
                            handleClick={() => {
                                this.handleClick(index)
                            }}
                        />
                    ))}
                </FriendCards>
            </div>
        )
    }

    handleClick (index) {
        let { score, topScore, friends } = this.props;
        let { incrementScore, resetScore, shuffleFriends } = this.props;

        if(friends[index].clicked) {
            $('.friends-list .friend-card').addClass('shake');
            setTimeout(() => {
                $('.friends-list .friend-card').removeClass('shake');
            }, 1000);
            resetScore()
            this.setState({
                ...this.state,
                result: {
                    text: 'You guessed incorrectly!',
                    guessed: false,
                }
            })
            
        } else {
            incrementScore(index)
            this.setState({
                ...this.state,
                result: {
                    text: 'You guessed correctly!',
                    guessed: true,
                }
            })
        }

        shuffleFriends()
    }
}

const mapStateToProps = state => ({
    score: state.HomePageReducer.score,
    topScore: state.HomePageReducer.topScore,
    scores: state.HomePageReducer.scores,
    friends: state.HomePageReducer.friends
})

export default connect(
    mapStateToProps
)(HomePage)