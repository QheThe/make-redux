import React, { Component } from 'react'
import ThemeSwitcher from './ThemeSwitcher.jsx'
import Proptypes from 'prop-types'

class Content extends Component {
    constructor () {
        super()
        this.state = { themeColor: '' }
    }
    static contextTypes = {
        store: Proptypes.object
    }

    componentDidMount () {
        const { store } = this.context
        this._updateThemeColor()
        store.subscribe(() => { this._updateThemeColor() })
    }

    _updateThemeColor () {
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }
    render () {
        return (
            <div>
                <h1 style={{ color: this.state.themeColor }}>主题内容</h1>
                <ThemeSwitcher />
            </div>
        )
    }
}

export default Content