import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
// import {Form, Button} from 'semantic-ui-react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const [username, setUsername] = React.useState(false)
  const [password, setPassword] = React.useState(false)
  const {name, displayName, handleSubmit, error} = props
  return (
    <div className="auth-form-div">
      <Paper className="paper-form">
        <h1>{displayName} here!</h1>
        <form onSubmit={handleSubmit} name={name} className="auth-form-box">
          <TextField
            label="email"
            margin="normal"
            name="email"
            type="text"
            onChange={evt => setUsername(evt.target.value)}
          />

          <TextField
            label="password"
            margin="normal"
            name="password"
            type="password"
            onChange={evt => setPassword(evt.target.value)}
          />

          <Button
            disabled={!username || !password}
            variant="contained"
            type="submit"
          >
            {displayName}
          </Button>
        </form>
      </Paper>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      if (!evt.target.email.value || !evt.target.password.value)
        throw Error('Not a valid login')
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
