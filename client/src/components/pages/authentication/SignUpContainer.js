import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import SignUpForm from './SignUpForm'

class SignUpContainer extends Component {
  state = {
    firstName: undefined,
    lastName: undefined,
    email: undefined
  }

  handleOnChange = (e) => this.setState({ [e.target.id]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.props.domainData.newUser(this.state)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <SignUpForm
          {...this.state}
          firstName={this.firstName}
          lastName={this.lastName}
          email={this.email}
          handleOnChange={this.handleOnChange}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default withRouter(SignUpContainer)
