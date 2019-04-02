import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withFirebase } from './Firebase';
import { AuthUserContext } from './Session';
import Navigation from './Navigation'
import 'bulma/css/bulma.min.css'
import * as ROUTES from './constants/routes';

import Navbar from './Navbar/Navbar'
import Home from './Home'
import NavbarBotton from './NavbarBotton/NavbarBotton'


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
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <Navbar authUser={this.state.authUser} />
          <Navigation />
          <Route path={ROUTES.HOME} component={Home} />
          <NavbarBotton />
        </Router>
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App);
