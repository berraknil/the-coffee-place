import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Blog from './components/Blog'
import Home from './components/Home'


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)


class App extends Component {
  render() {
    return (
      <div className="app">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/posts">Blog</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Blog} />
      </div>
    )
  }
}

export default App
