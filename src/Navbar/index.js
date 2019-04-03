/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import SignOutButton from '../SignOut'
import UserName from '../UserName'

export default class NavBar extends PureComponent {
    state = {
        isActive: false
    }

    render() {
        const isActive = this.state.isActive && ' is-active'

        return (
            <nav className='navbar is-primary is-fixed-top' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a className='navbar-item' href='https://bulma.io'>
                        <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' alt='Bulma logo' />
                    </a>
                    <a
                        href='/#'
                        role='button'
                        className={`navbar-burger burger ${isActive}`}
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='navbarBasicExample'
                        onClick={() => {
                            this.setState({
                                isActive: !this.state.isActive
                            })
                        }}>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>
                <div id='navbarBasicExample' className={`navbar-menu ${isActive}`}>
                    <div className='navbar-start'>
                        <a className='navbar-item'>
                            Olá, <UserName />
                        </a>
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <div className='buttons'>
                                <a className='button is-primary'>
                                    <strong>Exportar</strong>
                                </a>
                                <SignOutButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

