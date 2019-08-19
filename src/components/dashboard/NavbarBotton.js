/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'
import { assoc, evolve } from 'ramda'
import NavbarDropdownUp from './NavbarDropdownUp'
import format from 'date-fns/format'

export default class NavbarBotton extends PureComponent {
    state = {
        isActive: false,
        values: {
            year: format(new Date(), 'YYYY'),
            month: format(new Date(), 'MM')
        }
    }

    handleTogleBurger = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    handleOnSelectChose = (name, value) => {
        this.setState(
            evolve({
                values: assoc(name, value)
            }),
            () => {
                this.props.changeDate(this.state.values)
            }
        )
    }

    handleOnChoseValue = (name, value) => {
        this.setState(
            evolve({
                values: assoc(name, value)
            }),
            () => {
                this.props.changeDate(this.state.values)
            }
        )
    }

    render() {
        const isActive = this.state.isActive && 'is-active'

        return (
            <nav
                className='navbar is-light is-fixed-bottom'
                role='navigation'
                aria-label='main navigation'
                style={ {
                    height: isActive && '100vh',
                    overflowY: isActive && 'auto'
                } }>
                <div className='navbar-brand'>
                    <a
                        role='button'
                        className={ `navbar-burger burger ${isActive}` }
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='botton-navbar'
                        onClick={ this.handleTogleBurger }>
                        <span aria-hidden='true' />
                        <span aria-hidden='true' />
                        <span aria-hidden='true' />
                    </a>
                </div>
                <div id='botton-navbar' className={ `navbar-menu ${isActive}` }>
                    <div className='navbar-start'>
                        <NavbarDropdownUp
                            dateNameType='year'
                            dates={ ['2021', '2020', '2019'] }
                            selected={ this.state.values.year }
                            onSelectChose={ this.handleOnChoseValue }
                        />
                        <NavbarDropdownUp
                            dateNameType='month'
                            dates={ [
                                '01',
                                '02',
                                '03',
                                '04',
                                '05',
                                '06',
                                '07',
                                '08',
                                '09',
                                '10',
                                '11',
                                '12'
                            ] }
                            selected={ this.state.values.month }
                            onSelectChose={ this.handleOnSelectChose }
                        />
                    </div>
                    <div className='navbar-end'>
                        <a
                            className='navbar-item'
                            name='do-handpoint'
                            onClick={ this.props.handPoint }>
                            Novo ponto
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}
