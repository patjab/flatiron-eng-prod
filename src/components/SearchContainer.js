import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import UsernameInput from './UsernameInput'
import Results from './Results'

class SearchContainer extends Component {
  render() {
    return (
      <Fragment>
        <UsernameInput />
        <Results />
      </Fragment>
    )
  }
}

export default SearchContainer
