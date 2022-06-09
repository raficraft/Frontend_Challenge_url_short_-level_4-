import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/reset.css';
import './css/designSystem.css';
import Demo from './core/component/Demo/Demo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
      <Demo title="Démo" content="Lorem ipsum"/>
      </header>

    </div>
  );
}

export default App;