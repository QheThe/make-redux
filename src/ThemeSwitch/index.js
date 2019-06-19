import React, { Component } from 'react'
import Header from './Header.jsx'
import Content from './Content.jsx'
import ThemeSwitcher from './ThemeSwitcher.jsx'

class ThemeSwitch extends Component {
    render () {
        return (
            <div>
                <Header />
                <Content />
                <ThemeSwitcher />
            </div>
        )
    }
}

export default ThemeSwitch