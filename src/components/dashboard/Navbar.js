/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import SignOutButton from '../authentication/siginout'
import UserName from './UserName'
import * as ROUTES from '../../constants/routes'
import logo from '../../assets/relogio-escrito.svg'

class NavBar extends PureComponent {
    state = {
        isActive: false
    }

    handleGoHome = () => {
        this.props.history.push(ROUTES.HOME)
    }

    handleToggleBurger = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        const isActive = this.state.isActive && ' is-active'

        return (
            <nav
                className='navbar is-primary is-fixed-top'
                role='navigation'
                aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a
                        className='navbar-item'
                        onClick={ this.handleGoHome }>
                        <img
                            src={ logo }
                            width='112'
                            height='28'
                            alt='Bater horas logo'
                        />
                    </a>
                    <a
                        role='button'
                        className={ `navbar-burger burger ${isActive}` }
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                        onClick={ this.handleToggleBurger }>
                        <span aria-hidden='true' />
                        <span aria-hidden='true' />
                        <span aria-hidden='true' />
                    </a>
                </div>
                <div
                    id='navbarBasicExample'
                    className={ `navbar-menu ${isActive}` }>
                    <div className='navbar-start'>
                        <a className='navbar-item'>
                            Olá, <UserName />
                        </a>
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <div className='buttons'>
                                <SignOutButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const Navbar = withRouter(NavBar)

export default Navbar
