import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../../actions/index'
import './Menu.css'

class Menu extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  renderPosts() {
    return this.props.posts.map(post => (
      <li className="menu-list__item" key={post.id}>
        <h4>{post.title.rendered}</h4>
        <div
          className="menu-list__content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </li>
    ))
  }
  render() {
    return (
      <div className="menu">
        <h2>Espresso Collection</h2>
        <ul className="menu__list">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.data }
}

Menu.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchPosts })(Menu)
