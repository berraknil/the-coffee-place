import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAboutPage } from '../actions/index'
/* import PropTypes from 'prop-types'*/
import './About.css'

class Home extends Component {
  componentDidMount() {
    this.props.fetchAboutPage()
  }

  render() {
    return (
      <div className="about">
        <div
          className="about__content"
          dangerouslySetInnerHTML={{ __html: this.props.page.rendered }}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { page: state.aboutPage.data }
}

export default connect(mapStateToProps, { fetchAboutPage })(Home)
