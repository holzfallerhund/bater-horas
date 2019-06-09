/* eslint-disable no-unused-vars */
import React from 'react'

import { AuthUserContext, withAuthorization } from '../session'
import { PasswordForgetForm } from '../authentication/passwordForget'

const AccountPage = () => (
    <AuthUserContext.Consumer>
        { authUser => <PasswordForgetForm /> }
    </AuthUserContext.Consumer>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountPage)
