import React, { Component } from 'react'
import { connect } from 'react-redux'
/* import { bindActionCreators } from 'redux'
*/
import { fetchPage } from '../actions/index'
/* import PropTypes from 'prop-types'*/
import './Menu.css'

class Menu extends Component {
  // Just change the page number depending on route?
  componentDidMount() {
    this.props.fetchPage(162)
  }

  render() {
    return (
      <div className="menu">
        <span dangerouslySetInnerHTML={{ __html: this.props.page.rendered }} />
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

export default connect(mapStateToProps, { fetchPage })(Menu)
