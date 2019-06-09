import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import styled from 'styled-components'

import { SignUpLink } from './signup'
import { PasswordForgetLink } from './passwordForget'
import { withFirebase } from '../firebase'
import * as ROUTES from '../../constants/routes'

const SignInPage = () => (
    <div>
        <h1>SignIn</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
)

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

const StyledSection = styled.section`
    .input {
    border-radius: 50px;
    }

    .button {
    margin-top: 20px;
    margin-bottom: 20px;
    min-width: 150px;
    }

    .login-logo {
    margin: 0 auto;
    margin-bottom: 50px;
    max-height: 100px;
    }
`

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
                    <div className='field'>
                        <label className='label'>Password</label>
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
                { error && (
                    <div className='has-text-centered'>
                        <a href='signup.html'>
                            { error }
                        </a>
                    </div>
                ) }
                <div className='has-text-centered'>
                    <a href='signup.html'>
                        Cadastra-se
                    </a>
                </div>
                <div className='has-text-centered'>
                    <a href=''>
                        Esqueceu a senha
                    </a>
                </div>
            </StyledSection>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase
)(SignInFormBase)

export default SignInPage

export { SignInForm }
