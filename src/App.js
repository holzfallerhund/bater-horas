import React, { Component } from 'react';

function makeApointment() {
  console.log('makeApointment()')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={ () => makeApointment() }>
          Fazer apontamento
        </button>
      </div>
    );
  }
}

export default App;
