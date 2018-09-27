import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUsername } from '../actions'

class UsernameInput extends Component {
  // From https://github.com/join?source=experiment-header-dropdowns-home:
  // Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen
  handleNameTyping = (e) => {
    const regex = /^[A-Za-z0-9](?!.*--)([A-Za-z0-9-]*)$/
    const username = e.target.value
    if ( regex.test(username) || username === '' ) {
      this.props.setUsername(username)
    }
  }

  render() {
    return (
      <input type='text' onChange={this.handleNameTyping} value={this.props.username}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch(setUsername(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsernameInput)
