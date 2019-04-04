import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../Navbar'
import * as ROUTES from '../constants/routes'

import { AuthUserContext } from '../Session'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
)

const NavigationAuth = () => (
  <Navbar />
)

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
)

export default Navigation
