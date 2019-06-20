import React, { Component } from 'react'
import PropTypes from 'prop-types'

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor,
        themeName: state.themeName,
        fullName: `${state.firstName} ${state.lastName}`
    }
}

export default connect = (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
        
        render () {
            const { store } = this.context
            let stateProps = mapStateToProps(store.getState())
            return <WrappedComponent {...stateProps}/>
        }
    }
    return Connect
}