import React, { Component } from 'react'
import { connect } from 'react-redux'
/*import { bindActionCreators } from 'redux'
*/
import { fetchPage } from '../actions/index'
/* import PropTypes from 'prop-types'*/

class Home extends Component {
  /* constructor(props) {
    super(props)

  }*/

  componentDidMount() {
    this.props.fetchPage(156)
  }

  render() {
    return (
      <div>
        Home Page!
      </div>
    )
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch)
}*/

export default connect(null, { fetchPage })(Home)
