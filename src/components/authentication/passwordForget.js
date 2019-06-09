import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withFirebase } from '../firebase'
import { StyledSection } from './signin'
import * as ROUTES from '../../constants/routes'

const PasswordForgetPage = () => <PasswordForgetForm />

const INITIAL_STATE = {
    email: '',
    error: null
}

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }
    }

    onSubmit = event => {
        const { email } = this.state

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
            })
            .catch(error => {
                this.setState({ error })
            })

        event.preventDefault()
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { email, error } = this.state

        return (
            <StyledSection className='section'>
                <div className='has-text-centered'>
                    <img
                        className='login-logo'
                        name='login-logo'
                        src='assets/img/logo_r_resumme.png'
                    />
                </div>
                <form onSubmit={ this.onSubmit }>
                    <div className='field'>
                        <label className='label'>Username</label>
                        <div className='control has-icons-right'>
                            <input
                                name='email'
                                className='input'
                                type='email'
                                value={ email }
                                onChange={ this.onChange }
                            />
                            <span className='icon is-small is-right'>
                                <i className='fa fa-user'></i>
                            </span>
                        </div>
                    </div>
                    <div className='has-text-centered'>
                        <button
                            disabled={
                                email === ''
                            }
                            type='submit'
                            className='button is-vcentered is-primary is-outlined'>
                            Enviar senha
                        </button>
                    </div>
                </form>
                { error && (
                    <div className='has-text-centered'>
                        <a href='signup.html'>
                            { error }
                        </a>
                    </div>
                ) }
            </StyledSection>
        )
    }
}

const PasswordForgetLink = () => (
    <div className='has-text-centered'>
        <Link to={ ROUTES.PASSWORD_FORGET }>
            Esqueceu a senha
        </Link>
    </div>
)

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }
