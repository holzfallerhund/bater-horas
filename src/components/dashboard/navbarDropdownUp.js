/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react'

export default class NavbarDropdownUp extends PureComponent {
    state = {
        isActive: false,
        contents: []
    }

    render() {
        const isActive = this.state.isActive && 'is-active'

        return (
            <div className={'navbar-item has-dropdown has-dropdown-up ' + isActive} >
                <a
                    className='navbar-link'
                    onClick={() => {
                        this.setState({
                            isActive: !this.state.isActive
                        })
                    }}>
                    {this.props.selected || this.props.contents[0]}
                </a>
                <div className='navbar-dropdown'>
                    {
                        this.props.contents.map(content => (
                            <a
                                className='navbar-item'
                                onClick={() => {
                                    this.setState({ isActive: !this.state.isActive })
                                    this.props.onSelectChose(this.props.name, content)
                                }}>
                                {content}
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}
