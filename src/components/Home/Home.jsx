import React from 'react'
import './Home.css'
import coffeeVideo from './home.mp4'

const Home = () => (
  <div className="home">
    <h1 className="home__title">The Coffee Place</h1>
    <video className="video-background" autoPlay loop>
      <source src={coffeeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  </div>
  )

export default Home
