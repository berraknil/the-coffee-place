import React, { Component } from 'react'
import { connect } from 'react-redux'
/*import { bindActionCreators } from 'redux'
*/
import { fetchPage } from '../actions/index'
/* import PropTypes from 'prop-types'*/
import './About.css'

class Home extends Component {
 

//Just change the page number depending on route?
  componentDidMount() {
    this.props.fetchPage(this.props.id)
  }

  render() {
    return (
      <div className="about">
      <span dangerouslySetInnerHTML={{ __html: this.props.page.rendered }}></span>
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


export default connect(mapStateToProps, { fetchPage })(Home)
