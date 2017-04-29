import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Content from './components/Content'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Content />
      </div>
    )
  }
}

export default App
