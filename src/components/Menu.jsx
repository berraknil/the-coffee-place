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

  renderPosts() {
    return this.props.posts.map((post, i) => {
      return(
      <li key={i}>
        <h1>{post.title.rendered}</h1>
        <span dangerouslySetInnerHTML={{ __html: post.content.rendered }}></span>
      </li>
      )
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderPosts()}
        </ul>
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
