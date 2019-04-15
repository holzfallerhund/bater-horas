import React from 'react'

import { AuthUserContext, withAuthorization } from '../Session'
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </>
    )}
  </AuthUserContext.Consumer>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountPage)