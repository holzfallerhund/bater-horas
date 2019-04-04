import React, { Component } from 'react'
import { withAuthorization } from '../Session';
import Table from '../Table'
import NavbarBotton from '../NavbarBotton'
import {
  apply,
  flip,
  map,
  pipe,
  pluck,
  splitEvery,
  subtract,
  sum
} from 'ramda'
import { compose } from 'recompose';
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


  handPoint() {
    const pointedHours =
      this.state.appointments.length % 2 === 0
        ? { pointedHours: date(this.state.appointments) }
        : {}

    const appointment = {
      date: new Date()
    }

    this.setState({
      appointments: this.state.appointments.concat([appointment]),
      ...pointedHours
    }, () => {
      this.props.firebase.writeAppointment(appointment.date)
    })

  }

  componentDidMount() {
    this.props.firebase.user().on("value", function (snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

  render() {
    const { appointments, pointedHours } = this.state;

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
              pointedHours={pointedHours}
            />
          </div>
        </section>
        <NavbarBotton />
      </>
    )
  }
}

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
  withFirebase,
)(Home);