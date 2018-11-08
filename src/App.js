import React, { Component } from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  state = {
    mockData: []
  }

  componentDidMount() {
    this.setState( { mockData: [] })
  }

  handPoint() {
    this.setState(prevSate => ({
       mockData: [
         ...prevSate.mockData,
         { id: 4, date: new Date().toString() }
        ]
    }))
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
              <th>ID</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
          {
            mockData.map((val, index) =>
              <tr key={index}>
                <td>{ val.id }</td>
                <td>{ val.date }</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </AppContainer>
    );
  }
}

export default App;
