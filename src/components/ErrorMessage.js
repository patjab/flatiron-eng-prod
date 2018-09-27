import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

class ErrorMessage extends Component {
  render() {
    return (
      <div style={{color: 'red'}}>
        { this.props.errorMessage ? <p>{this.props.errorMessage}</p> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps)(ErrorMessage)
