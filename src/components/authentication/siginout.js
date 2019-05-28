/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { withFirebase } from '../firebase'

const SignOutButton = ({ firebase }) => (
    <a className='button is-primary' onClick={ firebase.doSignOut }>
        <strong>Sair</strong>
    </a>
)

export default withFirebase(SignOutButton)
