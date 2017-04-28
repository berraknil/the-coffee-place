import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Blog from './components/Blog'
import Home from './components/Home'
import About from './components/About'
import Page from './components/Page'



class App extends Component {
  render() {
    return (
      <div className="app">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        
        <Route path="/contact" render={
          () => <Page id={19} />
        }/>
      </div>
    )
  }
}

export default App
