import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import relogio from '../../assets/relogio.svg'
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
                        src={ relogio }
                    />
                </div>
                <form onSubmit={ this.onSubmit }>
                    <div className='field'>
                        <label className='label'>E-mail</label>
                        <div className='control has-icons-right'>
                            <input
                                name='email'
                                className='input'
                                type='email'
                                value={ email }
                                onChange={ this.onChange }
                            />
                            <span className='icon is-small is-right'>
                                <i className='fa fa-envelope-square'></i>
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Senha</label>
                        <div className='control has-icons-right'>
                            <input
                                name='password'
                                className='input'
                                type='password'
                                value={ password }
                                onChange={ this.onChange }
                            />
                            <span className='icon is-small is-right'>
                                <i className='fa fa-key'></i>
                            </span>
                        </div>
                    </div>
                    <div className='has-text-centered'>
                        <button
                            disabled={
                                email === '' || password === ''
                            }
                            type='submit'
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
