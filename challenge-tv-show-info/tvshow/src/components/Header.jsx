import React, { Component } from 'react'
import Date from './Date'

class Header extends Component {


    render() {

        return (
            <header className="header">
                <p className="headerDate">Date:<Date /></p>
                <h1 className="title">PopCorn</h1>
                <p className="headerText">Welcome back !</p>

            </header>
        )
    }
}

export default Header
