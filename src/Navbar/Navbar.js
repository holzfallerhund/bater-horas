import React from 'react'

const NavBar = props => (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
            <a className='navbar-item' href='https://bulma.io'>
                <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28' alt='Bulma logo' />
            </a>
            <a href='/#' role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                <span aria-hidden='true'></span>
                <span aria-hidden='true'></span>
                <span aria-hidden='true'></span>
            </a>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
            <div className='navbar-start'>
                <a href='/#' className='navbar-item'>
                    Olá, Osmar Petry
                </a>
            </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <div className='buttons'>
                        <a href='/#' className='button is-primary'>
                            <strong>Exportar</strong>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default NavBar