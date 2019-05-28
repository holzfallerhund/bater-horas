/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import { evolve, assoc } from 'ramda'
import NavbarDropdownUp from './NavbarDropdownUp'
import { format } from 'date-fns'

export default class NavbarBotton extends PureComponent {
    state = {
        isActive: false,
        values: {
            year: format(new Date(), 'YYYY'),
            month: format(new Date(), 'MM')
        }
    }

    render() {
        const isActive = this.state.isActive && 'is-active'

        return (
            <nav
                className='navbar is-light is-fixed-bottom'
                role='navigation'
                aria-label='main navigation'
                style={{
                    height: isActive && '100vh',
                    overflowY: isActive && 'auto'
                }}>
                <div className='navbar-brand'>
                    <a
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
                        <NavbarDropdownUp
                            name='year'
                            contents={['2021', '2020', '2019']}
                            selected={this.state.values.year}
                            onSelectChose={(name, value) => {
                                this.setState(evolve({
                                    values: assoc(name, value)
                                }), () => {
                                    this.props.changeDate(this.state.values)
                                })
                            }}
                        />
                        <NavbarDropdownUp
                            name='month'
                            contents={[
                                '01', '02', '03', '04', '05', '06',
                                '07', '08', '09', '10', '11', '12',
                            ]}
                            selected={this.state.values.month}
                            onSelectChose={(name, value) => {
                                this.setState(evolve({
                                    values: assoc(name, value)
                                }), () => {
                                    this.props.changeDate(this.state.values)
                                })
                            }}
                        />
                    </div>
                    <div className='navbar-end'>
                        <a
                            className='navbar-item'
                            onClick={this.props.handPoint}>
                            Novo ponto
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}
