import React, { Component } from 'react'

import format from 'date-fns/format'
import { compose } from 'recompose'

import { handPointHours } from '../../utils/handpoint'

import { withAuthorization } from '../session'
import { withFirebase } from '../firebase'

import Table from '../table/Table'
import NavbarBotton from './NavbarBotton'

export class Home extends Component {
    state = {
        appointments: [],
        pointedHours: 0,
        dateTime: {
            year: format(new Date(), 'YYYY'),
            month: format(new Date(), 'MM')
        }
    }

    handleChangeDate = dateTime => {
        this.setState({ dateTime }, () => {
            this.getDate()
        })
    }

    handleTextUpdate = event => {
        this.props.firebase
            .writeDescription(
                this.state.dateTime.year + '-' + this.state.dateTime.month,
                event.target.id
            )
            .update({
                description: event.target.value
            })
    }

    handPoint = () => {
        const appointment = {
            date: format(new Date(), 'YYYY-MM-DD HH:mm:ss')
        }

        this.props.firebase.writeAppointment(
            this.state.dateTime.year + '-' + this.state.dateTime.month,
            appointment
        )
    }

    handlePointedHours = () => handPointHours(this.state.appointments)

    getDate() {
        this.props.firebase
            .getAppointments(
                this.state.dateTime.year + '-' + this.state.dateTime.month
            )
            .onSnapshot(snapshot => {
                const appointments = []
                snapshot.docs.forEach(appointment => {
                    appointments.push({
                        id: appointment.id,
                        date: new Date(appointment.data().date),
                        description: appointment.data().description
                    })
                })
                this.setState({
                    appointments: appointments || []
                })
            })
    }

    componentDidMount() {
        this.getDate()
    }

    render() {
        const { appointments } = this.state

        return (
            <>
                <section className='section'>
                    <div className='container'>
                        <Table
                            appointments={ appointments }
                            pointedHours={ this.handlePointedHours() }
                            handleTextUpdate={ this.handleTextUpdate }
                        />
                    </div>
                </section>
                <NavbarBotton
                    changeDate={ this.handleChangeDate }
                    handPoint={ this.handPoint }
                />
            </>
        )
    }
}

const condition = authUser => !!authUser

export default compose(
    withAuthorization(condition),
    withFirebase
)(Home)
