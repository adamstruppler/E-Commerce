import React from 'react'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const SignUpForm = ({firstName, lastName, email, handleOnChange, onSubmit, password}) => {
  return (
    <form>
      <div>
        <Card raised='true'>
          <Typography type='headline' component='h2'>
            First Name:
          </Typography>
          <input type='text' id='firstName' onChange={handleOnChange} />
          <Typography type='headline' component='h2'>
            Last Name:
          </Typography>
          <input type='text' id='lastName' onChange={handleOnChange} />
          <Typography type='headline' component='h2'>
            Email:
          </Typography>
          <input type='text' id='email' onChange={handleOnChange} />
        </Card>
        <Card raised='true'>
          <Typography type='headline' component='h2'>
          Password:
          </Typography>
          <input type='text' id='password' onChange={handleOnChange} />
        </Card>
      </div>
      <div>
        <Button raised onClick={onSubmit}>Sign Up</Button>
        <Link to='/login'>Login</Link>
      </div>
    </form>
  )
}

SignUpForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default SignUpForm
