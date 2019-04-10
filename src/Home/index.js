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
import { format } from 'date-fns'
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
    pointedHours: 0,
    dateTime: {
      year: format(new Date(), 'YYYY'),
      month: format(new Date(), 'MM')
    }
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
      date: format(new Date(), 'YYYY-MM-DD HH:mm')
    }

    this.props.firebase.writeAppointment(
      this.state.dateTime.year + '-' + this.state.dateTime.month,
      appointment
    )
  }

  getDate() {
    this.props.firebase.getAppointments(
      this.state.dateTime.year + '-' + this.state.dateTime.month
    ).onSnapshot((snapshot) => {
      const retorno = []
      snapshot.docs
        .forEach(appointment => {
          retorno.push({
            date: new Date(appointment.data().date)
          })
        })
      this.setState({
        appointments: retorno.reverse() || []
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
        <button onClick={() => this.setState({
          appointments: []
        })}>
        hel</button>
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
        <NavbarBotton changeDate={(dateTime) => {
          console.log(dateTime)
          this.setState({dateTime}, () => {
            this.getDate()
          })
        }}/>
      </>
    )
  }
}

const condition = authUser => !!authUser

export default compose(
  withAuthorization(condition),
  withFirebase,
)(Home)