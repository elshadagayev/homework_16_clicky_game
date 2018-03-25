import React from 'react'
import { connect } from 'react-redux'
import background from './imgs/background.svg'
import './Slider.css'
import $ from 'jquery'

const style = {
    background: {
        background: 'fixed url(' + String(background) + ') repeat left top',
        backgroundColor: '#2c323c',
        color: '#fff',
        minHeight: 400,
        padding: '100px 20px',
        paddingBottom: 140,
        textAlign: 'center',
        width: '100%',
        height: 300
    }
}

export class Slider extends React.Component {
    render () {
        const { result } = this.props
        return (<div className="slider" style={style.background}>
            <h1>Clicky Game</h1>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            <div className="notification">{result.text}</div>
        </div>)
    }

    componentDidUpdate () {
        const { result } = this.props;

        if(result.guessed === true) {
            $('.notification').addClass('success')
            setTimeout(() => {
                $('.notification').removeClass('success')
            }, 1000);
        } else if (result.guessed === false) {
            $('.notification').addClass('error')
            setTimeout(() => {
                $('.notification').removeClass('error')
            }, 1000);
        }
    }
}