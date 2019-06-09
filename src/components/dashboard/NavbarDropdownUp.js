/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'

export default class NavbarDropdownUp extends PureComponent {
    state = {
        isActive: false,
        dates: []
    }

    handleChangeDate = newDate => () => {
        this.setState({
            isActive: !this.state.isActive
        })
        this.props.onSelectChose(
            this.props.dateNameType,
            newDate
        )
    }

    handleOnClick = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        const isActive = this.state.isActive && 'is-active'

        return (
            <div
                className={
                    'navbar-item has-dropdown has-dropdown-up ' + isActive
                }>
                <a
                    className='navbar-link'
                    onClick={ this.handleOnClick }>
                    { this.props.selected || this.props.dates[0] }
                </a>
                <div className='navbar-dropdown'>
                    { this.props.dates.map((newDate, key) => (
                        <a
                            key={ key }
                            className='navbar-item'
                            onClick={ this.handleChangeDate(newDate) }>
                            { newDate }
                        </a>
                    )) }
                </div>
            </div>
        )
    }
}
