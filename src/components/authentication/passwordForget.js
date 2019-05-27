import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withFirebase } from '../firebase'
import * as ROUTES from '../../constants/routes'

const PasswordForgetPage = () => (
    <>
        <h1 className="title is-1">Esqueceu a senha?</h1>
        <PasswordForgetForm />
    </>
)

const INITIAL_STATE = {
    email: '',
    error: null,
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

        const isInvalid = email === ''

        return (
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <label className="label">E-mail</label>
                    <p className="control has-icons-left has-icons-right">
                        <input
                            className={`input ${error && 'is-danger'}`}
                            type="email"
                            name="email"
                            placeholder="Seu e-mail"
                            value={this.state.email}
                            onChange={this.onChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                {error &&
                    <p className="help is-danger">{error.message}</p>
                }
                <div className="control">
                    <button
                        disabled={isInvalid}
                        type="submit"
                        className="button is-link">
                        Resetar senha
                        </button>
                </div>
            </form>
        )
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
)

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }