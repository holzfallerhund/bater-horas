import React, { Component } from 'react'
import { withAuthorization } from '../Session'
import Table from '../Table'
import NavbarBotton from '../NavbarBotton'
import {
  apply,
  dropLast,
  flip,
  map,
  pipe,
  pluck,
  splitEvery,
  subtract,
  sum
} from 'ramda'
import { compose } from 'recompose'
import { withFirebase } from '../Firebase'

const msToHours = ms => ms / 1000 / 60 / 60

const date = pipe(
  pluck('date'),
  splitEvery(2),
  map(apply(flip(subtract))),
  sum,
  msToHours
)
export class Home extends Component {
  state = {
    appointments: [],
    pointedHours: 0
  }


  handlePointedHours() {
    return (
      this.state.appointments.length % 2 === 0
        ? date(this.state.appointments)
        : date(dropLast(1, this.state.appointments))
    )
  }

  handPoint() {
    const appointment = {
      date: new Date()
    }

    this.props.firebase.writeAppointment(appointment.date)
  }

  componentDidMount() {
    this.props.firebase.getAppointments().on('value', snapshot =>
      snapshot.forEach(appointment =>
        this.setState({
          appointments: this.state.appointments.concat(
            [{ date: new Date(appointment.val().dateTime) }]
          )
        })
      )
    )
  }

  render() {
    const { appointments } = this.state

    return (
      <>
        <section className="section">
          <div className="container">
            <button
              className='button'
              onClick={() => this.handPoint()}>
              Fazer apontamento
              </button>
            <Table
              appointments={appointments}
              pointedHours={this.handlePointedHours()}
            />
          </div>
        </section>
        <NavbarBotton />
      </>
    )
  }
}

const condition = authUser => !!authUser

export default compose(
  withAuthorization(condition),
  withFirebase,
)(Home)