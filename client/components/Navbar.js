import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../store'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
  toolbar: {
    background: '#000',
    justifyContent: 'space-evenly'
  },
  login: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%'
  }
})

const Navbar = props => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button color="inherit" component={Link} to="/searchForASong">
            Search for a Song!
          </Button>

          {props.user ? (
            <div className={classes.login}>
              <Button color="inherit" component={Link} to="/myaccount">
                My Account
              </Button>

              <Button color="inherit" href="#" onClick={props.handleClick}>
                Logout
              </Button>
            </div>
          ) : (
            <div className={classes.login}>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Sign Up
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
