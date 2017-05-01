import React, { Component } from 'react'
import { connect } from 'react-redux'
/* import { bindActionCreators } from 'redux'
*/
import { fetchPage } from '../actions/index'
/* import PropTypes from 'prop-types'*/
import './Contact.css'
import twitter from '../icons/twitter.svg'
import instagram from '../icons/instagram.svg'
import gmail from '../icons/gmail.svg'
import github from '../icons/github.svg'

class Contact extends Component {
  // Just change the page number depending on route?
  componentDidMount() {
    this.props.fetchPage(19)
  }

  render() {
    return (
      <div className="contact">
        <div
          className="contact__content"
          dangerouslySetInnerHTML={{ __html: this.props.page.rendered }}
        />
        <ul className="social">
          <li>
            <a
              href="https://github.com/berraknil/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/berraknil/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gmail} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/berraknil/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/berraknil/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" />
            </a>
          </li>

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
  return { page: state.page.data }
}

export default connect(mapStateToProps, { fetchPage })(Contact)
