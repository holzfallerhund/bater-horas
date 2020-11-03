import React from 'react'

import Navbar from './Navbar'

import { AuthUserContext } from '../session'

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser => authUser && <NavigationAuth />}
        </AuthUserContext.Consumer>
    </div>
)

const NavigationAuth = () => <Navbar />

export default Navigation
