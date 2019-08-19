import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import ButtonBackToSigin from './ButtonBackToSigin'
import { withFirebase } from '../firebase'
import LoginWrapper from './LoginWrapper'
import * as ROUTES from '../../constants/routes'

const PasswordForgetPage = () => <PasswordForgetForm />

const INITIAL_STATE = {
    email: '',
    error: null
}

class PasswordForget extends Component {
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
            <LoginWrapper>
                <h3 className='title is-3'>Troque a sua senha</h3>
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
                    <div className='has-text-centered'>
                        <button
                            disabled={
                                email === ''
                            }
                            type='submit'
                            name='send-password'
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
                <div className='has-text-centered'>
                    <ButtonBackToSigin />
                </div>
            </LoginWrapper>
        )
    }
}

const PasswordForgetLink = () => (
    <div className='has-text-centered'>
        <Link to={ ROUTES.PASSWORD_FORGET } name='forget-password'>
            Esqueceu a senha
        </Link>
    </div>
)

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForget)

export { PasswordForgetForm, PasswordForgetLink }
