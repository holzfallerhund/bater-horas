/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'

export default class NavbarBotton extends PureComponent {
    state = {
        isActive: false,
        isActiveSelect: false
    }

    render() {
        const isActive = this.state.isActive && ' is-active'
        const isActiveSelect = this.state.isActiveSelect && ' is-active'

        return (
            <nav className='navbar is-light is-fixed-bottom' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a
                        href='/#'
                        role='button'
                        className={`navbar-burger burger ${isActive}`}
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='botton-navbar'
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
                <div id='botton-navbar' className={`navbar-menu ${isActive}`}>
                    <div className='navbar-start'>
                        <div className={'navbar-item has-dropdown has-dropdown-up ' + isActiveSelect} >
                            <a
                                className='navbar-link'
                                onClick={() => {
                                    this.setState({
                                        isActiveSelect: !this.state.isActiveSelect
                                    })
                                }}>
                                2019
                            </a>
                            <div className='navbar-dropdown'>
                                <a href='/' className='navbar-item'>
                                    2019
                                </a>
                                <hr class="navbar-divider" />
                                <a href='/' className='navbar-item'>
                                    Adicionar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
