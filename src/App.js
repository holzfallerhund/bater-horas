import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { withFirebase } from './components/firebase'
import { AuthUserContext } from '@horas/components/session'
import 'bulma/bulma.sass'
import * as ROUTES from './constants/routes'

import Navigation from './components/dashboard/Navigation'
import Home from './components/dashboard/Home'
import SignUp from './components/authentication/SignUp'
import SignIn from './components/authentication/SignIn'
import ForgetPassword from './components/authentication/ForgetPassword'

class App extends Component {
    state = {
        authUser: null
    }

    componentDidMount() {
        this.setState({ appointments: [], pointedHours: 0 })
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null })
            }
        )
    }

    componentWillUnmount() {
        this.listener()
    }

    render() {
        return (
            <AuthUserContext.Provider value={ this.state.authUser }>
                <Router>
                    <Navigation authUser={ this.state.authUser } />
                    <Route path={ ROUTES.HOME } exact component={ Home } />
                    <Route path={ ROUTES.SIGN_UP } component={ SignUp } />
                    <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
                    <Route
                        path={ ROUTES.PASSWORD_FORGET }
                        component={ ForgetPassword }
                    />
                </Router>
            </AuthUserContext.Provider>
        )
    }
}

export default withFirebase(App)
