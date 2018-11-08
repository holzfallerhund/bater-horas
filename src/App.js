import React, { Component } from 'react';
import styled from 'styled-components'
import mock from './mock/hand-points.js'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends Component {

  handPoint() {
    console.log('handPoint()')
  }

  render() {
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
            mock.map((val, index) =>
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
