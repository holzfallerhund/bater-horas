
import React, { Component } from 'react'

import {
    withRouter
} from 'react-router-dom'

class BackToSignPage extends Component {
    handleRoute = () => this.props.history.push('/signin')

    render() {
        return (
            <button
                name='back-to-signin'
                className='button is-vcentered is-primary'
                onClick={ this.handleRoute }>
                Voltar
            </button>
        )
    }
}

export default withRouter(BackToSignPage)
