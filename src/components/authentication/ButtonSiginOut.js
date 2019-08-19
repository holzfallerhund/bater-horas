/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { withFirebase } from '../firebase'

const ButtonSignOut = ({ firebase }) => (
    <a name='exit' className='button is-primary' onClick={ firebase.doSignOut }>
        <strong>Sair</strong>
    </a>
)

export default withFirebase(ButtonSignOut)
