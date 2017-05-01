import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchContactPage } from '../actions/index'
/* import PropTypes from 'prop-types'*/
import './Contact.css'
import twitter from '../icons/twitter.svg'
import instagram from '../icons/instagram.svg'
import gmail from '../icons/gmail.svg'
import github from '../icons/github.svg'

class Contact extends Component {
  componentDidMount() {
    this.props.fetchContactPage()
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

function mapStateToProps(state) {
  return { page: state.contactPage.data }
}

export default connect(mapStateToProps, { fetchContactPage })(Contact)
