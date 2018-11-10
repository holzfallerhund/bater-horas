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

const TableFooter = ({ dates, hours }) => {
  if (dates.length > 0) {
    return (
      <tfoot style={ {backgroundColor: "pink" } }>
        <tr>
          <td>{ hours }</td>
        </tr>
      </tfoot>
    )
  }

  return null
}

class App extends Component {
  state = {
    mockData: [],
    hours: 0
  }

  componentDidMount() {
    this.setState( { mockData: [], hours: 0 })
  }

  handPoint() {
    const hours =
      this.state.mockData.length % 2 === 0
        ? { hours: date(this.state.mockData) }
        : {}

    const appointment = {
      date: new Date()
    }

    console.log(hours, this.state.mockData)

    this.setState({
      mockData: this.state.mockData.concat([appointment]),
      ...hours
    })
  }

  render() {
    const { mockData } = this.state;
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
          {
            (mockData.length % 2 === 0
              ? mockData
              : mockData).map((val, index) =>
              <tr key={index}>
                <td>{ val.date.toString() }</td>
              </tr>
            )
          }
          </tbody>
          { TableFooter({ dates: mockData, hours: this.state.hours }) }
        </table>
      </AppContainer>
    );
  }
}

export default App;
