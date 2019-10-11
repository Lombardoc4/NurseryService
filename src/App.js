import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './house/nav'
import Landing from './house/landing'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <header className="App-header">
        <p>
          This is the dock.
        </p>
      </header>
    </div>
  );
}

export default App;
