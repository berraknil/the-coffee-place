import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <ul className="navigation">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </header>
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
