import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

fetch('https://demo.wp-api.org/wp-json/wp/v2/pages').then(data => this.updateState(data))

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
    }
  }
  updateState(data) {
    this.setState({ data })
    console.log(this.state.data)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
