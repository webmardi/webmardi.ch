import React from "react"

import addToMailchimp from 'gatsby-plugin-mailchimp'
import "./newsletter.scss"

export default class NewsletterForm extends React.Component {
  state = {
    email: null,
  }

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log('submit', this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        alert('Thanks for subscribing !')
      })
  }

  render() {
    return (
      <div className="newsletter">
        <div>
          <form onSubmit={this._handleSubmit}>
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="email"
              name="email"
            />
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}
