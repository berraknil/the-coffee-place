import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
const WPAPI = require('wpapi')

const wp = new WPAPI({ endpoint: 'http://developtests.com/wp-json' })
class App extends Component {
  render() {
    return wp
      .pages()
      .then(page =>
        page.map((p) => {
          if (p.id === 156) {
            console.log(p.title.rendered)
          } else {
            console.log(p.id)
          }
        }),
      )
      .catch(err => console.error(err))
  }
}

export default App
