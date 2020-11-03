import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    .input {
        border-radius: 50px;
    }

    .button {
        margin-top: 20px;
        margin-bottom: 20px;
        min-width: 150px;
    }

    .login-logo {
        margin: 0 auto;
        margin-bottom: 50px;
        max-height: 100px;
    }
`

const LoginWrapper = ({ children }) => (
    <StyledSection className='section'>
        <div className='columns is-desktop'>
            <div className='column is-4 is-offset-4'>{children}</div>
        </div>
    </StyledSection>
)

export default LoginWrapper
