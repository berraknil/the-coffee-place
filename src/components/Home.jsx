import React, { Component } from 'react'
import './Home.css'
import coffeeVideo from './coffee_place.mp4'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <h1 className="home__title">The Coffee Place</h1>
        <video className="video-background" autoPlay loop>
          <source src={coffeeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }
}

export default Home
