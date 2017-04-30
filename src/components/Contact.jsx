import React, { Component } from 'react'
import { connect } from 'react-redux'
/* import { bindActionCreators } from 'redux'
*/
import { fetchPage } from '../actions/index'
/* import PropTypes from 'prop-types'*/
import './Contact.css'

class Contact extends Component {
  // Just change the page number depending on route?
  componentDidMount() {
    this.props.fetchPage(19)
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__content" dangerouslySetInnerHTML={{ __html: this.props.page.rendered }} />
      </div>
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

export default connect(mapStateToProps, { fetchPage })(Contact)
