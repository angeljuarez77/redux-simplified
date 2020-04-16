import React from 'react';
import './App.css';
import MathAddition from './components/MathAddition';
import Number from './components/Number';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MathAddition />
          <Number />
        </header>
      </div>
    );
  }
}

export default App;
