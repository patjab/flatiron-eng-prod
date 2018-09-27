import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Card, Icon, Image } from 'semantic-ui-react'

class Results extends Component {
  state = {
    currentUser: 'No Inquiry'
  }

  componentDidUpdate() {
    fetch(`https://api.github.com/users/${this.props.username}`)
    .then(r => r.json())
    .then(data => {
      if ( data.message === "Not Found" && this.state.currentUser !== 'Not Found' ) {
        this.setState({ currentUser: 'Not Found' })
      } else if ( this.state.currentUser.login !== data.login || data.login === null ) {
        this.setState({
          currentUser: {
            name: data.name,
            email: data.email,
            company: data.company,
            public_repos: data.public_repos,
            avatar_url: data.avatar_url,
            login: data.login,
            followers: data.followers,
            following: data.following,
            bio: data.bio
          }
        })
      }
    })
  }

  renderCard = () => {
    const url = `https://www.github.com/${this.state.currentUser.login}`
    const currentUser = this.state.currentUser

    return (
      <Card className='centered'>
        <Image src={currentUser.avatar_url} />
        <Card.Content>
          <Card.Header>
            <a href={url}>
              {currentUser.name}
            </a>
          </Card.Header>
          <Card.Meta>
            <span className='email'>
              { currentUser.email ? <p>Email: {currentUser.email}</p> : null }
              { currentUser.company ? <p>Company: {currentUser.company}</p> : null }
              { currentUser.public_repos ? <p>Public Repos: {currentUser.public_repos}</p> : null }
             </span>
          </Card.Meta>
          <Card.Description>{currentUser.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='user' />
          Followers: {currentUser.followers} | Following: {currentUser.following}
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.currentUser === 'No Inquiry' ?
            'Please type a username to begin'
          :
            this.state.currentUser !== 'Not Found' ?
              this.renderCard()
              :
              'No user with the name exists'
        }
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
