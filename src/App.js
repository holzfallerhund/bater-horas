import React, { Component } from 'react';
import styled from 'styled-components'
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
import Table from './Table/Table'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
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
      <AppContainer>
        <button onClick={() => this.handPoint()}>
          Fazer apontamento
        </button>
        <Table
          appointments={appointments}
          pointedHours={pointedHours}
        />
      </AppContainer>
    );
  }
}

export default App;
