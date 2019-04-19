import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withFirebase } from './Firebase'
import { AuthUserContext } from './Session'
import Navigation from './Navigation'
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import * as ROUTES from './constants/routes'

import Home from './Home'
import SignUpPage from './SignUp'
import SignInPage from './Sign'
import PasswordForgetPage from './PasswordForget'
import AccountPage from './Account'


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
      },
    )
  }

  componentWillUnmount() {
    this.listener()
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <Navigation authUser={ this.state.authUser }/>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route
            path={ROUTES.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        </Router>
      </AuthUserContext.Provider>
    )
  }
}

export default withFirebase(App)
