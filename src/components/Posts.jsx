import React, { Component } from 'react'
import { connect } from 'react-redux'
/*import { bindActionCreators } from 'redux'
*/
import { fetchPosts } from '../actions/index'
/* import PropTypes from 'prop-types'*/

class Posts extends Component {
  /* constructor(props) {
    super(props)

  }*/

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        List of blog posts
      </div>
    )
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch)
}*/

export default connect(null, { fetchPosts })(Posts)
