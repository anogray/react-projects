import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class ThemeToggle extends Component {
static contextType = ThemeContext;
    render() {
        //const {dark} = this.context
        //console.log("theme states",dark)
        const {toggleTheme} = this.context
        console.log("toggle fxn",toggleTheme)
        return (
            <button onClick={toggleTheme}>Toggle the Theme</button>
        )
    }
}

export default ThemeToggle