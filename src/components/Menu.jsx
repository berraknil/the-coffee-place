import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
/* import PropTypes from 'prop-types'*/
import './Menu.css'

class Menu extends Component {
  /* constructor(props) {
    super(props)

  }*/

  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.map(post => (
      <li className="menu-list__item" key={post.id}>
        <h3>{post.title.rendered}</h3>
        <span className="menu-list__content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </li>
      ))
  }
  render() {
    return (
      <div className="menu">
        <ul className="menu__list">
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

export default connect(mapStateToProps, { fetchPosts })(Menu)
