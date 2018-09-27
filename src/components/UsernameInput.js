import React, { Component } from 'react'
import { connect } from 'react-redux'

class UsernameInput extends Component {
  state = {
    username: ''
  }

  // From https://github.com/join?source=experiment-header-dropdowns-home:
  // Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen
  handleNameTyping = (e) => {
    const regex = /^[A-Za-z0-9](?!.*--)([A-Za-z0-9-]*)$/
    const username = e.target.value
    if ( regex.test(username) || username === '' ) {
      this.setState({username})
    }
  }

  render() {
    return (
      <input type='text' onChange={this.handleNameTyping} value={this.state.username}/>
    )
  }
}

export default connect()(UsernameInput)
