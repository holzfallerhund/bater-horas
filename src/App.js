import React, { Component, Fragment } from 'react';
import 'bulma/css/bulma.min.css'
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
import Navbar from './Navbar/Navbar'
import NavbarBotton from './NavbarBotton/NavbarBotton'
import Table from './Table/Table'

const msToHours = ms => ms / 1000 / 60 / 60

const date = pipe(
  pluck('date'),
  splitEvery(2),
  map(apply(flip(subtract))),
  sum,
  msToHours
)

class App extends Component {
  state = {
    appointments: [],
    pointedHours: 0
  }

  componentDidMount() {
    this.setState({ appointments: [], pointedHours: 0 })
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
    })
  }

  render() {
    const { appointments, pointedHours } = this.state;
    return (
      <Fragment>
        <Navbar />
        <section class="section">
          <div class="container">
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
      </Fragment>
    );
  }
}

export default App;
