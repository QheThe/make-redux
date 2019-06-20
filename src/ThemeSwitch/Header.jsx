import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    // 使用 context 必须填写
    static contextTypes = {
        store: PropTypes.object
    }

    constructor () {
       super()
       this.state = { themeColor: ''} 
    }

    componentWillMount () {
        const { store } = this.context
        this._updateThemeColor()
        store.subscribe(() => { this._updateThemeColor() })
    }

    // 将全局store绑定到组件state上
    _updateThemeColor (){
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }

    render () {
        return (
            <h1 style={{ color: this.state.themeColor }}>主题色切换</h1>
        )
    }
}

export default Header