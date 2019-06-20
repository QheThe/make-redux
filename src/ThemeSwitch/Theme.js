import React, { Component } from 'react'
import Header from './Header.jsx'
import Content from './Content.jsx'
import PropTypes from 'prop-types'
import feux  from '../fuex'

const themeReducer =  (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = feux.createStore(themeReducer)

class Theme extends Component {
    // 子组件 context 内容校验
    static childContextTypes ={
        store: PropTypes.object
    }

    // 组件 context 对象内容
    getChildContext () {
        return { store }
    }
    
    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

export default Theme