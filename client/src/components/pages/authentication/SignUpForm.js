import React from 'react'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

const SignUpForm = ({firstName, lastName, email, handleOnChange, onSubmit}) => {
  return (
    <form>
      <div>
        <Card raised='true'>
          <Typography type='headline' component='h2'>
            First Name:
          </Typography>
          <input type='text' id='lastName' onChange={handleOnChange} />
          <Typography type='headline' component='h2'>
            Last Name:
          </Typography>
          <input type='text' id='email' onChange={handleOnChange} />
          <Typography type='headline' component='h2'>
            Email:
          </Typography>
          <input type='text' id='firstName' onChange={handleOnChange} />
        </Card>
      </div>
      <div>
        <Button raised onClick={onSubmit}>Sign Up</Button>
        <Link to='/'>Login</Link>
      </div>
    </form>
  )
}

export default SignUpForm
