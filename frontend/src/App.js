import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chat Box With Socket connection open two tabs in browser and test
        </p>
     
       <Chat visible={true}/>
      </header>
    </div>
  );
}

export default App;
