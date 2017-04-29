import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/Contact" component={Contact} />
        </main>
      </div>
    )
  }
}

export default App
