import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faKey } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/relogio.svg'
import { SignUpLink } from './SignUp'
import { PasswordForgetLink } from './ForgetPassword'
import { withFirebase } from '../firebase'
import * as ROUTES from '../../constants/routes'
import LoginWrapper from './LoginWrapper'

import SignInToastWithMessageContext from '../toast/toastWithMessageContext'

const SignInPage = () => <SignInForm />

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props)

        this.state = { ...INITIAL_STATE }
    }

    onSubmit = event => {
        const { email, password } = this.state

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
                this.props.history.push(ROUTES.HOME)
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
        const { email, password, error } = this.state

        return (
            <LoginWrapper>
                <div className='has-text-centered'>
                    <img
                        className='login-logo'
                        name='login-logo'
                        alt='Logo do aplicativo'
                        src={ logo }
                    />
                    <h1 className='title is-2'>Acesse o sistema</h1>
                </div>
                <form onSubmit={ this.onSubmit }>
                    <div className='field'>
                        <label className='label' htmlFor='email'>E-mail</label>
                        <div className='control has-icons-right'>
                            <input
                                id='email'
                                name='email'
                                className='input'
                                type='email'
                                value={ email }
                                onChange={ this.onChange }
                            />
                            <span className='icon is-small is-right'>
                                <FontAwesomeIcon icon={ faEnvelopeSquare } />
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label' htmlFor='password'>Senha</label>
                        <div className='control has-icons-right'>
                            <input
                                id='password'
                                name='password'
                                className='input'
                                type='password'
                                value={ password }
                                onChange={ this.onChange }
                            />
                            <span className='icon is-small is-right'>
                                <FontAwesomeIcon icon={ faKey } />
                            </span>
                        </div>
                    </div>
                    <div className='has-text-centered'>
                        <button
                            disabled={
                                email === '' || password === ''
                            }
                            type='submit'
                            name='login'
                            className='button is-vcentered is-primary is-outlined'>
                            Login
                        </button>
                    </div>
                </form>
                <PasswordForgetLink />
                <SignUpLink />
                { error && (
                    <SignInToastWithMessageContext
                        error={ error }
                    />
                ) }
            </LoginWrapper>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase)

export default SignInPage

export { SignInForm }
