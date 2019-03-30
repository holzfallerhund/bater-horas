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
import { format } from 'date-fns'

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

const TableCell = ({ appointments }) => {
  return (
    (appointments.length % 2 === 0
      ? appointments
      : appointments).map((appointment, index) =>
      <tr key={index}>
        <td>{ format(appointment.date, 'YYYY-MM-DD HH:mm:ss') }</td>
      </tr>
    )
  )
}

const TableFooter = ({ dates, pointedHours  }) => {
  if (dates.length > 0) {
    return (
      <tfoot style={ {backgroundColor: "pink" } }>
        <tr>
          <td>{ pointedHours  }</td>
        </tr>
      </tfoot>
    )
  }

  return null
}

class App extends Component {
  state = {
    appointments: [],
    pointedHours : 0
  }

  componentDidMount() {
    this.setState( { appointments: [], pointedHours : 0 })
  }

  handPoint() {
    const pointedHours  =
      this.state.appointments.length % 2 === 0
        ? { pointedHours : date(this.state.appointments) }
        : {}

    const appointment = {
      date: new Date()
    }

    console.log(pointedHours , this.state.appointments)

    this.setState({
      appointments: this.state.appointments.concat([appointment]),
      ...pointedHours
    })
  }

  render() {
    const { appointments } = this.state;
    return (
      <AppContainer>
        <button onClick={ () => this.handPoint() }>
          Fazer apontamento
        </button>
        <table>
          <thead>
            <tr>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
          <TableCell
            appointments={ appointments }
          />
          </tbody>
          <TableFooter
            dates={ appointments }
            pointedHours = { this.state.pointedHours  }
          />
        </table>
      </AppContainer>
    );
  }
}

export default App;
