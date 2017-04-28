import React, { Component } from 'react'
import { connect } from 'react-redux'
/* import { bindActionCreators } from 'redux'
*/
import { fetchPage } from '../actions/index'
/* import PropTypes from 'prop-types'*/
import './Home.css'
import coffeeVideo from './coffee_place.mp4'

class Home extends Component {
  // Just change the page number depending on route?
  /* componentDidMount() {
    this.props.fetchPage(156)
  }*/

  render() {
    return (
      <main>
        <video className="video-background" autoPlay loop>
          <source src={coffeeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>The Coffee Place</h1>
      </main>
    )
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch)
}*/

function mapStateToProps(state) {
  return { page: state.page.data }
}

export default connect(mapStateToProps, { fetchPage })(Home)
