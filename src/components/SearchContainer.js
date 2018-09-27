import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

import UsernameInput from './UsernameInput'
import Results from './Results'


class SearchContainer extends Component {
  render() {
    return (
      <div id='SearchContainer' style={{textAlign: 'center'}}>
        <Header as='h1'>GitHub Profile Search</Header>
        <UsernameInput /><br/><br/>
        <Results />
      </div>
    )
  }
}

export default SearchContainer
