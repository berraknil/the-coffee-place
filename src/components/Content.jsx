import React from 'react'
import { Route } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './Content.css'

const Content = () => (
  <main className="content">
    <Route exact path="/" component={Home} />
    <Route path="/menu" component={Menu} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </main>
)

export default Content
