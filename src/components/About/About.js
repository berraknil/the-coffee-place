import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchAboutPage } from '../../actions/index'
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

const mapStateToProps = state => ({ page: state.aboutPage.data })

Home.propTypes = {
  fetchAboutPage: PropTypes.func.isRequired,
  page: PropTypes.shape({
    rendered: PropTypes.shape.isRequired,
  }).isRequired,
}

export default connect(
  mapStateToProps,
  { fetchAboutPage },
)(Home)
