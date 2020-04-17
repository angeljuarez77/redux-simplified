import React from 'react';
import './App.css';
import MathAddition from './components/MathAddition';
import Number from './components/Number.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MathAddition />
        </header>
      </div>
    );
  }
}

export default App;
