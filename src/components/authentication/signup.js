import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../firebase'
import { StyledSection } from './signin'
import * as ROUTES from '../../constants/routes'

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
}

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
)

class SignUpFormBase extends Component {
    state = { ...INITIAL_STATE }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                return this.props.firebase.user(authUser.user.uid).set({
                    username,
                    email
                })
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
        const { username, email, passwordOne, passwordTwo, error } = this.state

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
                                <i className='fa fa-user'></i>
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Usuário</label>
                        <div className='control has-icons-right'>
                            <input
                                name='username'
                                className='input'
                                type='text'
                                value={ username }
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
                                name='passwordOne'
                                className='input'
                                type='password'
                                value={ passwordOne }
                                onChange={ this.onChange }
                            />
                            <span className='icon is-small is-right'>
                                <i className='fa fa-key'></i>
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Confirme a senha</label>
                        <div className='control has-icons-right'>
                            <input
                                name='passwordOne'
                                className='input'
                                type='password'
                                value={ passwordTwo }
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
                                email === '' ||
                                passwordOne === '' ||
                                passwordOne === '' ||
                                (passwordOne !== passwordTwo)
                            }
                            type='submit'
                            className='button is-vcentered is-primary is-outlined'>
                            Cadastra-se
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

const SignUpForm = compose(
    withRouter,
    withFirebase
)(SignUpFormBase)

const SignUpLink = () => (

    <div className='has-text-centered'>
        <Link to={ ROUTES.SIGN_UP }>Cadastra-se</Link>
    </div>
)

export default SignUpPage

export { SignUpForm, SignUpLink }
