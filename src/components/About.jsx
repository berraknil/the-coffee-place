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
    this.props.fetchPage(2)
  }

  render() {
    return (
      <div>
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
