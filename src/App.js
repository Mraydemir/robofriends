import logo from './logo.svg';
import './App.css';
import React from'react';

class App extends React.component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning React maybe now
          </a>
        </header>
      </div>
  );
  }
}

export default App;
