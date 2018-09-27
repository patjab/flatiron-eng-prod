import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Results extends Component {
  state = {
    currentUser: null
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(nextProps.username === this.props.username)
  // }

  componentDidUpdate() {
    fetch(`https://api.github.com/users/${this.props.username}`)
    .then(r => r.json())
    .then(data => {
      if ( data.message === "Not Found"  ) {
        this.setState({currentUser: null})
      } else {
        console.log(data)
        this.setState({currentUser: data}, () => console.log(this.state.currentUser.avatar_url))
      }
    })
  }

  render() {
    return (
      <div>
        { this.state.currentUser ? <img src={this.state.currentUser.avatar_url} /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Results)
