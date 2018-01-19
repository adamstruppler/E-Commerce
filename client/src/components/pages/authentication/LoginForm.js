import React from 'react'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const LoginForm = ({email, password, handleOnChange, onSubmit}) => {
  return (
    <form>
      <div>
        <Card raised='true'>
          <Typography type='headline' component='h2'>
          Email:
          </Typography>
          <input type='text' id='email' onChange={handleOnChange} />
          <Typography type='headline' component='h2'>
          Password:
          </Typography>
          <input type='text' id='password' onChange={handleOnChange} />
        </Card>
      </div>
      <div>
        <Button raised onClick={onSubmit}>Login</Button>
        <Button raised><Link to='/sign-up'>Sign Up</Link></Button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm
