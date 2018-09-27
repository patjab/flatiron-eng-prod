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
      <Card>
        <Image src={currentUser.avatar_url} />
        <Card.Content>
          <Card.Header>
            <a href={url}>
              {currentUser.name}
            </a>
          </Card.Header>
          <Card.Meta>
            <span className='email'>
              <ul>
                { currentUser.email ? <li>Email: {currentUser.email}</li> : null }
                { currentUser.company ? <li>Company: {currentUser.company}</li> : null }
                { currentUser.public_repos ? <li>Public Repos: {currentUser.public_repos}</li> : null }
              </ul>
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
            this.state.currentUser === 'Not Found' ?
              'No user with the name exists'
              :
              this.renderCard()
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
