import React from 'react'

import { AuthUserContext, withAuthorization } from '../session'

const UserName = () => (
    <AuthUserContext.Consumer>
        { authUser => authUser.displayName || authUser.email }
    </AuthUserContext.Consumer>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(UserName)
