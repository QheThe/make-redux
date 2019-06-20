import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeSwitcher extends Component {
    constructor () {
        super()
        this.state = { themeColor: '' }
    }

    static contextTypes = {
        store: PropTypes.object
    }
    
    componentDidMount () {
        this._updateThemeColor()
    }

    _updateThemeColor () {
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }

    render () {
        return (
            <div>
                <button style={{ color: this.state.themeColor }}>Red</button>
                <span> </span>
                <button style={{ color: this.state.themeColor }}>blue</button>
            </div>
        )
    }
}

export default ThemeSwitcher