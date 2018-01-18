import React, { Component } from 'react'
import logo from './AoSbeakerGirls.png'
import runningMan from './runningMan.gif'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className='title'>ALCHEMY OF SHAPE</h3>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AoS</h1>
          <h5>Naeri was here ;) ;)</h5>
          <img src={runningMan} className='running-man' alt='' />
        </header>
      </div>
    )
  }
}

export default App
