import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
    
    state = {
        count:0
    }
    constructor (props) {
        super(props)
        this.numberRef = React.createRef()
    }
    increment = () => {
        const number = this.numberRef.current.value * 1 //(string->int)
        this.setState(
            state => ({count: state.count + number})
        )
    }
    decrement = () => {
        const number = this.numberRef.current.value * 1 //(string->int)
        this.setState(
            state => ({count: state.count - number})
        )
    }
    incrementIfOdd = () => {
        const number = this.numberRef.current.value * 1 //(string->int)
        if (this.state.count % 2 === 1) {
            this.setState(
                state => ({count: state.count + number})
            )
        }
    }
    incrementAsync = () => {
        const number = this.numberRef.current.value * 1 //(string->int)
        setTimeout(() => {
            this.setState(
                state => ({count: state.count + number})
            )
        }, 1000)
        
    }
    render() {
        const { count } = this.state
        return (
            <div>
            <p>click {count}</p>
            <div>
                <select ref={this.numberRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        </div>
        )
    }
}