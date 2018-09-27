import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

import UsernameInput from './UsernameInput'
import ErrorMessage from './ErrorMessage'
import Results from './Results'

class SearchContainer extends Component {
  render() {
    return (
      <div id='SearchContainer' style={{textAlign: 'center'}}>
        <Header as='h1'>GitHub Profile Search</Header>
        <UsernameInput /><br/><br/>
        <Results/><br/><br/>
        <ErrorMessage/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage
  }
}

export default SearchContainer
