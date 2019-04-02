/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'

export default class NavbarBotton extends PureComponent {
    state = {
        isActive: false
    }

    render() {
        const isActive = this.state.isActive && ' is-active'
        return (
            <nav className='navbar is-light is-fixed-bottom' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <div className='navbar-start'>
                        <div className={'navbar-item is-hidden-touch has-dropdown has-dropdown-up ' + isActive} >
                            <a
                                className='navbar-link'
                                onClick={() => {
                                    this.setState({
                                        isActive: !this.state.isActive
                                    })
                                }}>
                                2019
                            </a>
                            <div className='navbar-dropdown'>
                                <a href='/' className='navbar-item'>
                                    2019
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
