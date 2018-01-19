import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import LoginForm from './LoginForm'

class LoginContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }

  handleOnChange = (e) => this.setState({[e.target.id]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    this.props.domainData.loginUser(this.state.email, this.state.password)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }

  render () {
    return (
      <div>
        <LoginForm
          {...this.state}
          email={this.email}
          password={this.password}
          handleOnChange={this.handleOnChange}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default withRouter(LoginContainer)
