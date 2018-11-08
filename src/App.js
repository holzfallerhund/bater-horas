import React, { Component } from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TableFooter = (props) => {
  /** TODO
   * Ter um Ramda, que vai:
   * 1- Pegar diferença horas duas datas. Precisa ser par.
   * 2- Somar com as diferenteças encontradas, entre duas datas no array
   * 3- Mostar o valor no lugar de `TOTAL`
   */
  if( props.length > 0)
    return (
      <tfoot>
        <tr>
          <td>{ props.length }</td>
          <td> TOTAL </td>
        </tr>
      </tfoot>
  )
}

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
         {
            id: prevSate.mockData.length,
            date: new Date().toString()
          }
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
          { TableFooter(mockData) }
          </tbody>
        </table>
      </AppContainer>
    );
  }
}

export default App;
