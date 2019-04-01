import React from 'react'

const NavbarBotton = props => (
    <nav className='navbar' role='navigation' aria-label='dropdown navigation'>
        <div className='navbar-menu'>
            <div className='navbar-start'>
                <div className='navbar-item has-dropdown has-dropdown-up'>
                    <a href='/'className='navbar-link'>
                    Dropup
                    </a>
                    <div className='navbar-dropdown'>
                        <a href='/'className='navbar-item'>
                            Overview
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default NavbarBotton