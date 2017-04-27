import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
/* import PropTypes from 'prop-types'*/

class Blog extends Component {
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
        {console.log(this.props.posts)}
      </div>
    )
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts }, dispatch)
}*/

function mapStateToProps(state) {
  return { posts: state.posts.data }
}

export default connect(mapStateToProps, { fetchPosts })(Blog)
